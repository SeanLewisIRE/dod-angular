import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  heroTopSpan:string = "Example"
  heroImage:string = "../../../../assets/images/ice.jpg"
  heroHeader:string = "Example"
  heroBottomSpan:string = "Example"
  
  cardData = [
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT"
    }
  ]

}
