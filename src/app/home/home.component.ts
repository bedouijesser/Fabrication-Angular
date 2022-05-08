import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from 'app/services/home.service';
import { SubmitButtonEvent } from 'app/shared/submit-btn/submtit-btn.model';
import COUNTRYLIST from 'assets/data/county.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('contact', { static: true }) contactFormDiv: ElementRef;
  countryList = COUNTRYLIST;
  contactFormGroup: FormGroup;
  contactFormSubmitButtonEvent: SubmitButtonEvent;

  constructor(private fb: FormBuilder, private homeService: HomeService) {}

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    this.initForm();
  }
  ngAfterViewInit() {
    if (window.location.hash)
      window.location.hash === '#contact'
        ? this.contactFormDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
        : null;
  }

  initForm() {
    this.contactFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  submitContactForm() {
    this.homeService.submitButtonEventSubject.next("Loading");
      this.homeService.sendContactMessage(this.contactFormGroup.value).subscribe(
        (res) => {
          this.homeService.submitButtonEventSubject.next("Submitted");
          if (res)
            this.homeService.submitButtonEventSubject.next("Success");
          this.contactFormGroup.reset();
        },
        (err) => {
          this.homeService.submitButtonEventSubject.next("Error");
        },
      );
  }
}
