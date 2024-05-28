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
  heroStyle:string = "h-screen"
  heroTextStyle: string = "centered-full-page"
  heroImageStyle: string = "object-cover"
  
  cardData = [
    {
      headerSubtitle: "subtitle",
      header: "header1",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['orange']
    },
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['white']
    },
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['orange']
    },
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['white']
    },
    {
      headerSubtitle: "subtitle",
      header: "header last",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['orange']
    },
  ]

}
