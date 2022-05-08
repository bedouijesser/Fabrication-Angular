import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./todo-maybe-not-sure/profile/profile.component";
import { SignupComponent } from "./home/signup/signup.component";
import { DesktopComponent } from "./home/desktop/desktop.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "user-profile", component: ProfileComponent },
  { path: "desktop", component: DesktopComponent },
  { path: "signup", component: SignupComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: []
})
export class AppRoutingModule {}
