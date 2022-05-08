import { Component, OnInit, Renderer2 } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  countryList = [
    { name: "United States", code: "US" },
    { name: "Canada", code: "CA" },
    { name: "United Kingdom", code: "UK" },
    { name: "Germany", code: "DE" },
    { name: "France", code: "FR" },
    { name: "Italy", code: "IT" },
    { name: "Switzerland", code: "CH" },
    { name: "Austria", code: "AT" },
    { name: "Belgium", code: "BE" },
    { name: "Cyprus", code: "CY" },
    { name: "Denmark", code: "DK" },
    { name: "Finland", code: "FI" },
    { name: "Greece", code: "GR" },
    { name: "Ireland", code: "IE" },
    { name: "Iceland", code: "IS" },
    { name: "Lithuania", code: "LT" },
    { name: "Latvia", code: "LV" },
    { name: "Malta", code: "MT" },
    { name: "Tunisia", code: "TN" },
    { name: "Portugal", code: "PT" },
    { name: "Poland", code: "PL" },
    { name: "Romania", code: "RO" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Spain", code: "ES" },
    { name: "Sweden", code: "SE" }
  ];
  contactFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.contactFormGroup = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      company: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      country: ["", Validators.required],
      postalCode: ["", Validators.required],
      message: ["", Validators.required]
    });
  }
}
