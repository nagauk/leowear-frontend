import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, CloudinaryUploadResponse } from '../models/models';

/**
 * Server-side image upload. The backend handles resizing to the configured
 * byte target (default 1 MB) and uploads to Cloudinary; this service just
 * ships the picked file as multipart and returns the CDN URL.
 */
@Injectable({ providedIn: 'root' })
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadImage(file: File): Observable<ApiResponse<CloudinaryUploadResponse>> {
    const fd = new FormData();
    fd.append('file', file, file.name);
    return this.http.post<ApiResponse<CloudinaryUploadResponse>>(
      `${environment.apiUrl}/admin/uploads/image`,
      fd
    );
  }
}
