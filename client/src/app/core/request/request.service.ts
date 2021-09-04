import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  /**
   * GET wrapper.
   *
   * @param endpoint - Full path.
   */
  get<T>(endpoint: string, options = {}): Observable<T> {
    return this.http.get<T>(endpoint, options);
  }

  /**
   * DELETE wrapper.
   *
   * @param endpoint - Full path.
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(endpoint);
  }

  /**
   * POST wrapper.
   *
   * @param endpoint - Full path.
   * @param data - Post data.
   */
  post<T>(endpoint: string, data: any, options = {}): Observable<T> {
    return this.http.post<T>(endpoint, data, options);
  }

  /**
   * PUT wrapper.
   *
   * @param endpoint - Full path.
   * @param data - Put data.
   */
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(endpoint, data);
  }

  /**
   * PATCH wrapper.
   *
   * @param endpoint - Full path.
   * @param data - Patch data.
   */
  patch<T>(endpoint: string, data: any): Observable<T> {
    return this.http.patch<T>(endpoint, data);
  }
}
