import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Page } from '../models/models';

export interface Complaint {
  id?: number;
  userId?: number;
  username?: string;
  orderId?: number;
  orderNumber?: string;
  subject: string;
  message: string;
  status?: string;
  adminResponse?: string;
  createdAt?: string;
}

export interface Feedback {
  id?: number;
  userId?: number;
  username?: string;
  guestName?: string;
  guestEmail?: string;
  rating: number;
  comment?: string;
  createdAt?: string;
}

@Injectable({ providedIn: 'root' })
export class SupportService {
  constructor(private http: HttpClient) {}

  submitComplaint(data: Partial<Complaint>): Observable<ApiResponse<Complaint>> {
    return this.http.post<ApiResponse<Complaint>>(`${environment.apiUrl}/complaints`, data);
  }

  myComplaints(page = 0, size = 10): Observable<ApiResponse<Page<Complaint>>> {
    return this.http.get<ApiResponse<Page<Complaint>>>(`${environment.apiUrl}/complaints/my`, {
      params: { page, size }
    });
  }

  allComplaints(page = 0, size = 20): Observable<ApiResponse<Page<Complaint>>> {
    return this.http.get<ApiResponse<Page<Complaint>>>(`${environment.apiUrl}/complaints`, {
      params: { page, size }
    });
  }

  updateComplaint(id: number, status: string, adminResponse?: string): Observable<ApiResponse<Complaint>> {
    return this.http.patch<ApiResponse<Complaint>>(`${environment.apiUrl}/complaints/${id}/status`, {
      status, adminResponse
    });
  }

  submitFeedback(data: Partial<Feedback>): Observable<ApiResponse<Feedback>> {
    return this.http.post<ApiResponse<Feedback>>(`${environment.apiUrl}/feedback`, data);
  }

  allFeedback(page = 0, size = 20): Observable<ApiResponse<Page<Feedback>>> {
    return this.http.get<ApiResponse<Page<Feedback>>>(`${environment.apiUrl}/feedback`, {
      params: { page, size }
    });
  }
}
