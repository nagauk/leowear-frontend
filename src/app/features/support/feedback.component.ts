import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SupportService } from '../../core/services/support.service';
import { AuthService } from '../../core/services/auth.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container" style="max-width:640px">
        <h2 class="section-title mb-2">Share your feedback</h2>
        <p class="text-muted mb-4">Help us improve Leo Wear. Anyone can leave feedback.</p>

        <div class="cs-card p-4">
          @if (!auth.isLoggedIn()) {
            <div class="mb-3">
              <label class="form-label">Your name *</label>
              <input class="form-control cs-form-control" [(ngModel)]="form.guestName" name="name">
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control cs-form-control" [(ngModel)]="form.guestEmail" name="email">
            </div>
          } @else {
            <p class="small text-muted">Submitting as <strong>{{ auth.currentUser()?.username }}</strong></p>
          }

          <div class="mb-3">
            <label class="form-label">Rating *</label>
            <div class="d-flex gap-2">
              @for (n of [1,2,3,4,5]; track n) {
                <button type="button" class="btn star-btn"
                        [class.active]="form.rating >= n"
                        (click)="form.rating = n">★</button>
              }
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Comments</label>
            <textarea class="form-control cs-form-control" rows="4" [(ngModel)]="form.comment"
                      name="comment" placeholder="What did you like or what can we improve?"></textarea>
          </div>

          @if (error) { <div class="alert alert-danger small">{{ error }}</div> }
          @if (success) { <div class="alert alert-success small">{{ success }}</div> }

          <button class="btn btn-cs-primary" (click)="submit()" [disabled]="loading || !form.rating">
            @if (loading) { <span class="spinner-border spinner-border-sm me-1"></span> }
            Submit feedback
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .star-btn {
      font-size: 1.5rem; color: #d1d5db; border: none; background: transparent; padding: 0 4px;
    }
    .star-btn.active { color: #f59e0b; }
  `]
})
export class FeedbackComponent implements OnInit {
  form = { guestName: '', guestEmail: '', rating: 0, comment: '' };
  loading = false;
  error = '';
  success = '';

  constructor(private support: SupportService, public auth: AuthService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.setPage({
      title: 'Feedback',
      description: 'Share your thoughts about Leo Wear — your feedback helps us improve.',
      canonicalPath: '/feedback'
    });
  }

  submit() {
    if (!this.form.rating) return;
    if (!this.auth.isLoggedIn() && !this.form.guestName?.trim()) {
      this.error = 'Please enter your name';
      return;
    }
    this.loading = true;
    this.error = '';
    this.success = '';
    this.support.submitFeedback(this.form).subscribe({
      next: res => {
        this.loading = false;
        this.success = res.message || 'Thank you for your feedback!';
        this.form = { guestName: '', guestEmail: '', rating: 0, comment: '' };
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.message || 'Failed to submit';
      }
    });
  }
}
