import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  @Input() topSpan: string = '';
  @Input() header: string = '';
  @Input() bottomSpan: string = '';
  @Input() imageSrc: string = '';
  @Input() heroStyle: string = '';
  @Input() heroTextStyle: string = '';
  @Input() heroImageStyle: string = '';

  constructor() { }

}
