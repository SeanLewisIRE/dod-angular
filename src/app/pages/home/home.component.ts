import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  heroTopSpan:string = ""
  heroImage:string = "../../../../assets/images/ice.jpg"
  heroHeader:string = "New Line Investments"
  heroBottomSpan:string = ""
  heroStyle:string = "h-screen"
  heroTextStyle: string = "centered-full-page"
  heroImageStyle: string = "object-cover"
  
  cardData = [
    {
      headerSubtitle: "",
      header: "Basic and Advanced Polar code courses",
      headerClassStyle: ['text-lg', 'header-blue', 'font-semibold'],
      cardTextStyle: ['text-blue'],
      firstPara: "This is an STCW course approved for the requirements in the new Polar Code regulations in force from 1 July 2018.",
      secondPara: "",
      link: "./",
      linkText: "",
      cardClass: ['white-home']
    },
    {
      headerSubtitle: "",
      header: "Basic and Advanced Polar code courses",
      headerClassStyle: ['text-lg', 'header-blue', 'font-semibold'],
      cardTextStyle: ['text-blue'],
      firstPara: "This is an STCW course approved for the requirements in the new Polar Code regulations in force from 1 July 2018.",
      secondPara: "",
      link: "./",
      linkText: "",
      cardClass: ['white-home']
    },
    {
      headerSubtitle: "",
      header: "Basic and Advanced Polar code courses",
      headerClassStyle: ['text-lg', 'header-blue', 'font-semibold'],
      cardTextStyle: ['text-blue'],
      firstPara: "This is an STCW course approved for the requirements in the new Polar Code regulations in force from 1 July 2018.",
      secondPara: "",
      link: "./",
      linkText: "",
      cardClass: ['white-home']
    },
    {
      headerSubtitle: "",
      header: "Basic and Advanced Polar code courses",
      headerClassStyle: ['text-lg', 'header-blue', 'font-semibold'],
      cardTextStyle: ['text-blue'],
      firstPara: "This is an STCW course approved for the requirements in the new Polar Code regulations in force from 1 July 2018.",
      secondPara: "",
      link: "./",
      linkText: "",
      cardClass: ['white-home']
    },
    {
      headerSubtitle: "",
      header: "Basic and Advanced Polar code courses",
      headerClassStyle: ['text-lg', 'header-blue', 'font-semibold'],
      cardTextStyle: ['text-blue'],
      firstPara: "This is an STCW course approved for the requirements in the new Polar Code regulations in force from 1 July 2018.",
      secondPara: "",
      link: "./",
      linkText: "",
      cardClass: ['white-home']
    },
  ]

  blanketCardStyle: Array<string> = ["rounded", "h-full"]

  servicesCardData = [
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      headerClassStyle: ['text-lg', 'header-blue', 'font-semibold'],
      cardTextStyle: ['text-blue'],
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
      headerClassStyle: ['text-lg','font-semibold'],
      cardTextStyle: ['opacity-90'],
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['navy-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      headerClassStyle: ['text-lg', 'header-blue', 'font-semibold'],
      cardTextStyle: ['text-blue'],
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['white-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "header1",
      headerClassStyle: ['text-2xl', 'text-blue'],
      firstPara: "firstPara",
      secondPara: "secondPara",
      link: "./",
      linkText: "LNK TEXT",
      cardTextStyle: ['text-m', 'text-white'],
      cardClass: ['navy-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "header",
      firstPara: "firstPara",
      secondPara: "secondPara",
      headerClassStyle: ['text-lg', 'header-blue', 'font-semibold'],
      cardTextStyle: ['text-blue'],
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
      headerClassStyle: ['text-lg', 'font-semibold'],
      cardTextStyle: ['opacity-90'],
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['navy-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
  ]

}
