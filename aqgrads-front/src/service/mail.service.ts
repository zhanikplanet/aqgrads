import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MailRequest {
  toEmail: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiUrl = 'https://localhost:7258/api/email/send';

  constructor(private http: HttpClient) {}

  sendMail(request: MailRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, request);
  }
}
