import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  heroTopSpan: string = ""
  heroImage: string = "../../../../assets/images/ice.jpg"
  heroHeader: string = "Services"
  heroBottomSpan: string = ""
  heroStyle: Array<string> = ['h-screen-25', 'lg:h-screen-50']
  heroTextStyle: Array<string> = ['absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'mx-auto', 'text-shadow']
  blanketCardStyle: Array<string> = ["rounded", "h-full", "mx-10", "lg:mx-5"]

  cardData = [
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
