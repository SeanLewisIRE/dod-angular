import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuStyle: string = 'full-opacity';
  showMenu = false;

  toggleNavbar() {
    this.showMenu = !this.showMenu;
    this.showMenu ? this.menuStyle = 'full-opacity' : this.menuStyle = 'initial-opacity';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 20) {
      this.menuStyle = 'initial-opacity';
    } else {
      this.menuStyle = 'full-opacity'
    }
  }
}
