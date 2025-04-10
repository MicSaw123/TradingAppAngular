import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()

export class BaseApiRequests {
  private baseUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {
  }

  get<T>(url: string, params?: HttpParams){
    return this.http.get<T>(`${this.baseUrl}/${url}`, {params}).pipe(catchError(this.formatErrors));
  }

  post<T>(url: string, body: T){
    return this.http.post<T>(`${this.baseUrl}/${url}`, body).pipe(catchError(this.formatErrors));
  }

  put<T>(url: string, body: T){
    return this.http.put<T>(`${this.baseUrl}/${url}`, body).pipe(catchError(this.formatErrors));
  }

  delete<T>(url: string) {
    return this.http.delete<T>(`${this.baseUrl}/${url}`).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any): Observable<any> {
    console.log(error);
    return throwError(error.error);
  }
}
