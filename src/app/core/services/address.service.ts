import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/models';

export interface Address {
  id?: number;
  label?: string;
  fullName?: string;
  line1: string;
  line2?: string;
  city?: string;
  state?: string;
  pincode?: string;
  phone?: string;
  defaultAddress?: boolean;
  formatted?: string;
}

@Injectable({ providedIn: 'root' })
export class AddressService {
  constructor(private http: HttpClient) {}

  list(): Observable<ApiResponse<Address[]>> {
    return this.http.get<ApiResponse<Address[]>>(`${environment.apiUrl}/addresses`);
  }

  create(data: Address): Observable<ApiResponse<Address>> {
    return this.http.post<ApiResponse<Address>>(`${environment.apiUrl}/addresses`, data);
  }

  update(id: number, data: Address): Observable<ApiResponse<Address>> {
    return this.http.put<ApiResponse<Address>>(`${environment.apiUrl}/addresses/${id}`, data);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${environment.apiUrl}/addresses/${id}`);
  }

  setDefault(id: number): Observable<ApiResponse<Address>> {
    return this.http.patch<ApiResponse<Address>>(`${environment.apiUrl}/addresses/${id}/default`, {});
  }
}
