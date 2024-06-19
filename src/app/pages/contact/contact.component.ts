import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  heroTopSpan: string = ""
  heroImage: string = "../../../../assets/images/ice.jpg"
  heroHeader: string = "Contact"
  heroBottomSpan: string = ""
  heroStyle: Array<string> = ['h-screen-25']
  heroTextStyle: Array<string> = ['absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'mx-auto', 'text-shadow']
  blanketCardStyle: Array<string> = ["rounded", "h-full", "mx-10"]
}
