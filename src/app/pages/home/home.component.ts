import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroTopSpan:string = "Example"
  heroImage:string = "../../../../assets/images/ice.jpg"
  heroHeader:string = "Example"
  heroBottomSpan:string = "Example"
  constructor() { }

  ngOnInit(): void {
  }

}
