import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    if (window.innerWidth < 640)
      this.showNavbar = true
  }
  
  navStyle: string = 'initial-opacity';
  showNavbar = false;
  showNavMenu = false;
  
  toggleNavMenu() {
    this.showNavMenu = !this.showNavMenu;
    this.showNavbar ? this.navStyle = 'scroll-opacity' : window.scrollY > 20 ? this.navStyle = 'scroll-opacity' : this.navStyle = 'initial-opacity'
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 20) {
      this.navStyle = 'scroll-opacity';
    } else {
      this.navStyle = 'initial-opacity'
    }
  }

  @HostListener('window:resize', [])
    onResize() {
      if(window.innerWidth < 640)
        this.showNavbar = true
    }  
  
}
