import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  private currentRoute: string;
  constructor(public location: Location, private element: ElementRef) {
    this.sidebarVisible = false;
    this.currentRoute= this.location.prepareExternalUrl(this.location.path())
    this.currentRoute = this.currentRoute.charAt(0) === '#' ? this.currentRoute.slice(1) : this.currentRoute;

  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;

    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
  isDesktop() {
    this.currentRoute
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];

    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    }
    this.sidebarClose();
  }

  isHome() {
    var route = this.location.prepareExternalUrl(this.location.path());
    if (route.charAt(0) === '#') {
      route = route.slice(1);
    }
    return route === '/home';
  }
}
