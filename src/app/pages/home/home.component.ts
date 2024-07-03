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
      cardClass: ['orange-home']
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
      cardClass: ['orange-home']
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
      cardClass: ['orange-home']
    },
  ]

  // heroTopSpan: string = ""
  // heroImage: string = "../../../../assets/images/ice.jpg"
  // heroHeader: string = "Services"
  // heroBottomSpan: string = ""
  // heroStyle: Array<string> = ['h-screen-25', 'lg:h-screen-50']
  // heroTextStyle: Array<string> = ['absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'mx-auto', 'text-shadow']
  blanketCardStyle: Array<string> = ["rounded", "h-full", "mx-10", "lg:mx-5"]

  servicesCardData = [
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['white-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['orange-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['white-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "header1",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['orange-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['white-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "header last",
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['orange-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
  ]

}
