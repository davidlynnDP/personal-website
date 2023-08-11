import { Component } from '@angular/core';

interface IContactByEmail {
  email: string,
  subject: string,
  body: string,
}

@Component({
  selector: 'contact-custom',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  private contactByEmail: IContactByEmail = {
    email: 'davidleon21goal@gmail.com',
    subject: 'Contáctame',
    body: 'Espero tener la oportunidad de hablar con ustedes. ¡Gracias!'
  }

  public contact: string = `mailto:${ this.contactByEmail.email }?subject=${ this.contactByEmail.subject }&body=${ this.contactByEmail.body }`;

}
