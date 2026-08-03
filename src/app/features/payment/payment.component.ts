import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PaymentService, PaymentSession } from '../../core/services/payment.service';
import { CartService } from '../../core/services/cart.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container" style="max-width:520px;">
        <div class="cs-card p-4">
          <h2 class="section-title mb-1">Complete payment</h2>
          <p class="text-muted small mb-4">Secure checkout — UPI QR · PhonePe · GPay · BHIM · Cards (Razorpay)</p>

          @if (loading) {
            <div class="text-center py-5"><div class="spinner-border text-danger"></div></div>
          } @else if (session) {
            <div class="mb-3">
              <div class="d-flex justify-content-between"><span class="text-muted">Order</span><strong>{{ session.orderNumber }}</strong></div>
              <div class="d-flex justify-content-between mt-2"><span class="text-muted">Amount</span>
                <strong class="fs-4">₹{{ session.amount | number:'1.0-0' }}</strong>
              </div>
            </div>

            @if (session.mock) {
              <div class="alert alert-warning small">
                <strong>Mock payment mode</strong><br>
                {{ session.message }}
              </div>
              <button class="btn btn-cs-primary w-100 btn-lg" [disabled]="paying" (click)="payMock()">
                @if (paying) { <span class="spinner-border spinner-border-sm me-2"></span> }
                Pay ₹{{ session.amount | number:'1.0-0' }} (Mock success)
              </button>
            } @else {
              <button class="btn btn-cs-primary w-100 btn-lg" [disabled]="paying" (click)="payRazorpay()">
                @if (paying) { <span class="spinner-border spinner-border-sm me-2"></span> }
                Pay with UPI / Card / NetBanking
              </button>
              <p class="text-muted small mt-2 mb-0 text-center">
                Supports BHIM UPI QR, PhonePe, Google Pay, Paytm &amp; more (enable methods in Razorpay Dashboard).
              </p>
            }

            @if (error) { <div class="alert alert-danger small mt-3 mb-0">{{ error }}</div> }
            @if (success) {
              <div class="alert alert-success mt-3 mb-0">Payment successful! Redirecting to your orders…</div>
            }
          } @else {
            <div class="alert alert-danger">{{ error || 'Unable to start payment' }}</div>
            <a routerLink="/orders" class="btn btn-outline-dark">My Orders</a>
          }
        </div>
      </div>
    </div>
  `
})
export class PaymentComponent implements OnInit {
  orderId!: number;
  session: PaymentSession | null = null;
  loading = true;
  paying = false;
  error = '';
  success = false;
  clearCart = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private payments: PaymentService,
    private cart: CartService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    // Canonical stays /pay — orderId is opaque, so different /pay/{id}
    // shouldn't appear as separate URLs in search engines.
    this.seo.setPage({
      title: 'Secure Checkout',
      description: 'Complete your Leo Wear order with our secure checkout.',
      canonicalPath: '/pay'
    });
    this.orderId = Number(this.route.snapshot.paramMap.get('orderId'));
    this.clearCart = this.route.snapshot.queryParamMap.get('clearCart') === '1';
    if (!this.orderId) {
      this.loading = false;
      this.error = 'Invalid order';
      return;
    }
    this.payments.createSession(this.orderId).subscribe({
      next: res => { this.session = res.data; this.loading = false; },
      error: err => {
        this.loading = false;
        this.error = err.error?.message || 'Could not create payment session';
      }
    });
  }

  payMock() {
    if (!this.session) return;
    this.paying = true;
    this.error = '';
    this.payments.verify({ orderId: this.session.orderId, mockConfirm: true }).subscribe({
      next: () => this.onPaid(),
      error: err => { this.paying = false; this.error = err.error?.message || 'Payment failed'; }
    });
  }

  async payRazorpay() {
    if (!this.session?.keyId || !this.session.razorpayOrderId) return;
    this.paying = true;
    this.error = '';
    try {
      await this.payments.loadRazorpayScript();
    } catch {
      this.paying = false;
      this.error = 'Could not load Razorpay. Check your network.';
      return;
    }

    const options: any = {
      key: this.session.keyId,
      amount: Math.round(Number(this.session.amount) * 100),
      currency: this.session.currency || 'INR',
      name: this.session.companyName || 'Leo Wear',
      description: `Order ${this.session.orderNumber}`,
      order_id: this.session.razorpayOrderId,
      // Enable UPI (QR + apps: PhonePe, BHIM, GPay), cards, netbanking, wallets
      method: {
        upi: true,
        card: true,
        netbanking: true,
        wallet: true
      },
      config: {
        display: {
          blocks: {
            utib: {
              name: 'Pay using UPI',
              instruments: [
                { method: 'upi' }
              ]
            },
            other: {
              name: 'Other payment methods',
              instruments: [
                { method: 'card' },
                { method: 'netbanking' },
                { method: 'wallet' }
              ]
            }
          },
          sequence: ['block.utib', 'block.other'],
          preferences: {
            show_default_blocks: true
          }
        }
      },
      prefill: {
        name: this.session.customerName || '',
        email: this.session.customerEmail || '',
        contact: this.session.customerPhone || '',
        method: 'upi'
      },
      theme: { color: '#e94560' },
      remember_customer: true,
      handler: (response: any) => {
        this.payments.verify({
          orderId: this.session!.orderId,
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature
        }).subscribe({
          next: () => this.onPaid(),
          error: err => { this.paying = false; this.error = err.error?.message || 'Verification failed'; }
        });
      },
      modal: { ondismiss: () => { this.paying = false; } }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.on('payment.failed', () => {
      this.paying = false;
      this.error = 'Payment failed or cancelled. Retry from My Orders.';
    });
    rzp.open();
  }

  private onPaid() {
    this.paying = false;
    this.success = true;
    if (this.clearCart) this.cart.clear();
    setTimeout(() => this.router.navigate(['/orders']), 1200);
  }
}
