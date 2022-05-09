import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { DesktopService } from 'app/services/desktop.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit {
  @ViewChild("nav", { static: true })
  set setNav(navElement: NgbNav) {
    this.nav = navElement;
  }
  nav: NgbNav;
  emailInputFiled = '';
  isEmailInvalid = localStorage.getItem('email') ? false : true;
  posteFormGroup: FormGroup;
  taillesMatFormGroup: FormGroup;
  cadreVerticFormGroup: FormGroup;
  accessoiresFormGroup: FormGroup;

  constructor(private desktopService: DesktopService, private toastrService: ToastrService, private fb: FormBuilder) {}

  ngOnInit(): void {
    if (localStorage.getItem('email')) this.emailInputFiled = localStorage.getItem('email');
    this.initForms();
  }

  initForms() {
    this.posteFormGroup = this.fb.group({
      reference: ['', Validators.required]
    });
    this.taillesMatFormGroup = this.fb.group({
      type: ['', Validators.required],
      taille: ['', Validators.required],
      otherType: [false, Validators.required],
    });
    this.cadreVerticFormGroup = this.fb.group({
      moduleCadre: ['', Validators.required],
      montantVertic: ['', Validators.required],
      alignement: ['centre', Validators.required],
    });
    this.accessoiresFormGroup = this.fb.group({
      blocksTiroiresConcept: ['', Validators.required],
      doubleDrawerUnit: ['', Validators.required],
    });
  }
  referenceChosen(nav) {
    nav.select("ngb-nav-1")
  }
  submitEmail() {
    if (!this.emailInputFiled.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      this.toastrService.error('Veuillez entrer une adresse email valide');
      return;
    }
    this.desktopService.submitEmail(this.emailInputFiled).subscribe(
      (res) => {
        if (res) {
          this.isEmailInvalid = false;
          localStorage.setItem('email', this.emailInputFiled);
        }
      },
      (err) => {
        this.toastrService.error('Une erreur est survenue');
      }
    );
  }
  cancelEmail() {
    this.isEmailInvalid = true;
  }
}
