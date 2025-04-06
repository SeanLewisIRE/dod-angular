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
      header: "Draft Surveys",
      firstPara: "We conduct precise draft surveys to calculate the weight of cargo loaded or discharged, ensuring accurate documentation for charter parties and cargo owners.",
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
      header: "Pre-Purchase Inspection",
      firstPara: "Our expert team performs thorough inspections of vessels on behalf of buyers, assessing their overall condition, compliance, and operational readiness before acquisition.",
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
      header: "Ultrasonic Hatch Cover, Watertight Door, & MCT Testing",
      firstPara: "We offer ultrasonic testing services to verify the watertight integrity of hatch covers, watertight doors, and cable transits, helping clients prevent water ingress and cargo damage.",
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
      header: "On/Off Hire Survey",
      firstPara: "We carry out on/off hire condition and bunker surveys to document the vessel’s state and fuel quantities at the start or end of a charter, protecting both owners and charterers.",
      secondPara: "secondPara",
      headerClassStyle: ['text-lg', 'font-semibold'],
      cardTextStyle: ['opacity-90'],
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['navy-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "Pre-Charter Survey",
      firstPara: "Our pre-charter surveys confirm that vessels meet all technical, safety, and operational requirements before entering into a charter agreement.",
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
      header: "Vessel Suitability Surveys",
      firstPara: "We assess vessels for their suitability to carry specific cargoes or operate on particular routes, ensuring compliance with safety and regulatory standards.",
      secondPara: "secondPara",
      headerClassStyle: ['text-lg', 'font-semibold'],
      cardTextStyle: ['opacity-90'],
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['navy-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "Condition Survey",
      firstPara: "We provide comprehensive condition surveys to evaluate and report on a vessel’s structural and operational state for insurance, compliance, or commercial purposes.",
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
      header: "Damage Survey",
      firstPara: "Our experienced surveyors assess and report on damage sustained by a vessel or cargo, identifying root causes and assisting with claims and repairs.",
      secondPara: "secondPara",
      headerClassStyle: ['text-lg', 'font-semibold'],
      cardTextStyle: ['opacity-90'],
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['navy-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "Bunker Survey",
      firstPara: "We conduct bunker surveys to accurately measure fuel quantities onboard, preventing disputes during bunkering and chartering operations.",
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
      header: "Warranty Survey",
      firstPara: "We offer warranty surveys to oversee and verify marine operations such as loading, transport, and installation, ensuring adherence to agreed safety protocols.",
      secondPara: "secondPara",
      headerClassStyle: ['text-lg', 'font-semibold'],
      cardTextStyle: ['opacity-90'],
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['navy-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "Lashing Securing Survey",
      firstPara: "Our lashing and securing surveys verify that cargo is properly secured in accordance with international maritime standards to prevent damage during transit.",
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
      header: "Pre-Shipment Inspection",
      firstPara: "We perform pre-shipment inspections to ensure cargo is in good condition, properly packed, and compliant with shipping requirements before being loaded.",
      secondPara: "secondPara",
      headerClassStyle: ['text-lg', 'font-semibold'],
      cardTextStyle: ['opacity-90'],
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['navy-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
    {
      headerSubtitle: "subtitle",
      header: "Container Inspection",
      firstPara: "We inspect shipping containers for structural integrity, cleanliness, and suitability for cargo, ensuring compliance with international shipping standards.",
      secondPara: "secondPara",
      headerClassStyle: ['text-lg', 'header-blue', 'font-semibold'],
      cardTextStyle: ['text-blue'],
      link: "./",
      linkText: "LNK TEXT",
      cardClass: ['white-service'].concat(this.blanketCardStyle),
      cardImage: "https://picsum.photos/100",
      cardImageStyle: ["rounded-full", "mx-auto", "h-20", "w-20"]
    },
  ]

}
