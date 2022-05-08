import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SignupComponent } from 'app/home/signup/signup.component';
import { DesktopComponent } from './desktop/desktop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [HomeComponent, SignupComponent, DesktopComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
