import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { DashboardStats } from '../../core/models/models';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container-fluid px-4">
        <!-- Admin Nav -->
        <div class="d-flex flex-wrap gap-2 mb-4">
          <a routerLink="/admin" class="btn btn-cs-dark btn-sm">Dashboard</a>
          <a routerLink="/admin/products" class="btn btn-outline-dark btn-sm">Products</a>
          <a routerLink="/admin/orders" class="btn btn-outline-dark btn-sm">Orders</a>
          <a routerLink="/admin/returns" class="btn btn-outline-dark btn-sm">Returns</a>
        </div>

        <h2 class="section-title mb-4">Admin Dashboard</h2>

        @if (loading) {
          <div class="text-center py-5"><div class="spinner-border text-danger"></div></div>
        } @else if (stats) {
          <!-- Stats Grid -->
          <div class="row g-3 mb-4">
            <div class="col-6 col-md-3">
              <div class="stat-card">
                <div class="stat-icon" style="background:#fef2f2;color:#e94560;"><i class="bi bi-currency-rupee"></i></div>
                <div class="stat-value">₹{{ stats.totalSales | number:'1.0-0' }}</div>
                <div class="stat-label">Total Sales</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="stat-card">
                <div class="stat-icon" style="background:#ecfdf5;color:#10b981;"><i class="bi bi-box-seam"></i></div>
                <div class="stat-value">{{ stats.totalOrders }}</div>
                <div class="stat-label">Total Orders</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="stat-card">
                <div class="stat-icon" style="background:#eff6ff;color:#3b82f6;"><i class="bi bi-bag"></i></div>
                <div class="stat-value">{{ stats.totalProducts }}</div>
                <div class="stat-label">Active Products</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="stat-card">
                <div class="stat-icon" style="background:#fefce8;color:#eab308;"><i class="bi bi-people"></i></div>
                <div class="stat-value">{{ stats.totalCustomers }}</div>
                <div class="stat-label">Customers</div>
              </div>
            </div>
          </div>

          <div class="row g-3 mb-4">
            <div class="col-6 col-md-3">
              <div class="stat-card">
                <div class="stat-value text-warning">{{ stats.pendingOrders }}</div>
                <div class="stat-label">Pending Orders</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="stat-card">
                <div class="stat-value text-success">{{ stats.deliveredOrders }}</div>
                <div class="stat-label">Delivered</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="stat-card">
                <div class="stat-value text-danger">{{ stats.lowStockProducts }}</div>
                <div class="stat-label">Low Stock Items</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="stat-card">
                <div class="stat-value" style="color:var(--cs-accent)">{{ stats.pendingReturns }}</div>
                <div class="stat-label">Pending Returns</div>
              </div>
            </div>
          </div>

          <div class="row g-4">
            <!-- Recent Orders -->
            <div class="col-lg-7">
              <div class="cs-card p-0 overflow-hidden">
                <div class="p-3 border-bottom d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">Recent Orders</h5>
                  <a routerLink="/admin/orders" class="btn btn-sm btn-outline-dark">View All</a>
                </div>
                <div class="table-responsive">
                  <table class="table cs-table mb-0">
                    <thead>
                      <tr><th>Order</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                      @for (o of stats.recentOrders; track o['id']) {
                        <tr>
                          <td><code>{{ o['orderNumber'] }}</code></td>
                          <td>{{ o['username'] }}</td>
                          <td>₹{{ o['totalAmount'] | number:'1.0-0' }}</td>
                          <td><span class="badge-status" [class]="(o['status'] || '').toLowerCase()">{{ o['status'] }}</span></td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Low Stock -->
            <div class="col-lg-5">
              <div class="cs-card p-0 overflow-hidden">
                <div class="p-3 border-bottom">
                  <h5 class="mb-0">Low Stock Alert</h5>
                </div>
                <div class="table-responsive">
                  <table class="table cs-table mb-0">
                    <thead>
                      <tr><th>Product</th><th>Stock</th><th>Price</th></tr>
                    </thead>
                    <tbody>
                      @for (item of stats.lowStockItems; track item['id']) {
                        <tr>
                          <td>{{ item['name'] }}</td>
                          <td><span class="badge bg-danger">{{ item['stock'] }}</span></td>
                          <td>₹{{ item['price'] | number:'1.0-0' }}</td>
                        </tr>
                      } @empty {
                        <tr><td colspan="3" class="text-center text-muted">All stocked up!</td></tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  stats: DashboardStats | null = null;
  loading = true;

  constructor(private orderService: OrderService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Admin Dashboard',
      description: 'Leo Wear admin dashboard — sales, orders, products, and customers.',
      canonicalPath: '/admin',
      noindex: true
    });
    this.orderService.getDashboard().subscribe({
      next: res => { this.stats = res.data; this.loading = false; },
      error: () => this.loading = false
    });
  }
}
