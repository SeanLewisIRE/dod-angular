import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s ease-in',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.5s ease-out',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ContactFormComponent {

  emailSent: string = "";


  public sendEmail(e: Event) {
    emailjs.sendForm('wedding_service', 'template_v1thjsa', e.target as HTMLFormElement, 'UQEUSIRgdwXafTeMq')
      .then((result: EmailJSResponseStatus) => {
        if (result.status == 200) {
          this.emailSent = "sent";
          // this.rsvpForm.reset();
        }
      }, (error) => {
        this.emailSent = "error";
        console.log(error.text);
      });
  }

}
