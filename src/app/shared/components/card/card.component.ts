import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})
export class CardComponent {

  @Input() headerSubtitle:string = ""
  @Input() header:string = ""
  @Input() firstPara:string = ""
  @Input() secondPara:string = ""
  @Input() cardLink:string = ""
  @Input() linkText:string = ""
  @Input() cardClass?:string = ""
  @Input() cardImage?:string = ""
  @Input() cardImageStyle?:string = ""
  @Input() imageAltText?:string = ""
  @Input() cardTextStyle?:string = ""
  @Input() headerClassStyle?:string = ""
}
