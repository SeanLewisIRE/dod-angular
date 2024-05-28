import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navStyle: string = 'initial-opacity';
  showNavbar = false;
  
  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 20) {
      this.navStyle = 'scroll-opacity';
    } else {
      this.navStyle = 'initial-opacity'
    }
  }
}
