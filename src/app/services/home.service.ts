import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmitButtonEvent } from 'app/shared/submit-btn/submtit-btn.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HomeService {
  submitButtonEventSubject: Subject<SubmitButtonEvent> = new Subject();

  constructor(private httpClient: HttpClient) { }


  getCountries() {
    return this.httpClient.get('/assets/data/county.model.ts');
  }
  sendContactMessage(contactForm) {
    return this.httpClient.post('/api/contact', contactForm);
  }

}
