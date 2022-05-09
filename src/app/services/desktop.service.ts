import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DesktopService {
  constructor(private httpClient: HttpClient) { }

  submitEmail(email: string) {
    return this.httpClient.post('/api/contact/submitEmail', { email });
  }
}
