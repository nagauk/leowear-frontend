import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/models';

export interface DeliverySettings {
  id?: number;
  deliveryCharge: number;
  freeDeliveryMinAmount: number;
}

export interface PincodeResult {
  valid: boolean;
  pincode: string;
  message: string;
  district?: string;
  state?: string;
  country?: string;
  postOffices?: string[];
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  constructor(private http: HttpClient) {}

  getDelivery(): Observable<ApiResponse<DeliverySettings>> {
    return this.http.get<ApiResponse<DeliverySettings>>(`${environment.apiUrl}/settings/delivery`);
  }

  updateDelivery(data: DeliverySettings): Observable<ApiResponse<DeliverySettings>> {
    return this.http.put<ApiResponse<DeliverySettings>>(`${environment.apiUrl}/settings/delivery`, data);
  }

  validatePincode(pincode: string): Observable<ApiResponse<PincodeResult>> {
    return this.http.get<ApiResponse<PincodeResult>>(`${environment.apiUrl}/pincode/${pincode}`);
  }
}
