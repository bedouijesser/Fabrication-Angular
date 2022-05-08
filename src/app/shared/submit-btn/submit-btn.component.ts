import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, Input } from '@angular/core';
import { HomeService } from 'app/services/home.service';
import { SubmitButtonEvent } from './submtit-btn.model';

@Component({
  selector: 'app-submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitBtnComponent implements OnInit {
  event: SubmitButtonEvent;
  buttonElement: ElementRef<HTMLButtonElement>;

  @Input() buttonText: string;
  @ViewChild('submitBtn', { static: true }) set setButtonElement(element: ElementRef<HTMLButtonElement>) {
    this.buttonElement = element;
  }

  eventActionMap: Record<string,Function> = {
    Loading: this.submitClicked,
    Submitted: this.submitClicked,
    Success: this.validate,
    Error: this.submitClicked,
  };

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {

    this.homeService.submitButtonEventSubject.subscribe(event => {
      this.eventActionMap[event].bind(this)();
    })
  }

  submitClicked() {
    this.buttonElement.nativeElement.classList.add('onclic');
  }

  validate() {
    setTimeout(() => {
    this.buttonElement.nativeElement.classList.remove('onclic');
      this.buttonElement.nativeElement.classList.add('validate');
    }, 2250);
  }
  callback() {
    setTimeout(() => {
      this.buttonElement.nativeElement.classList.remove('validate');
    }, 1250);
  }
}
