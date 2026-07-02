import { Component } from '@angular/core';

import { TrackWhatsappDirective } from '../track-whatsapp.directive';

@Component({
  selector: 'app-contact',
  imports: [TrackWhatsappDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent { }
