import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LocalizationService } from '../../services/localization.service';
import { fadeIn, slideInLeft, slideInRight, slideInUp } from '../../animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [fadeIn, slideInLeft, slideInRight, slideInUp]
})
export class ContactComponent {
  constructor(public l10n: LocalizationService) {}
  
  phone = '74740303';
  phoneDisplay = '+223 74 74 03 03';
  address = 'Sebenikoro, Bamako';
  
  callPhone() {
    window.location.href = `tel:+223${this.phone}`;
  }
  
  openMaps() {
    window.open('https://www.google.com/maps/place/Boulangerie+P%C3%A2tisserie+Sofia/@12.6075093,-8.049665,16.98z/data=!4m6!3m5!1s0xe51cb0aa4a6d0af:0xd8b972b2a9664bf5!8m2!3d12.6075127!4d-8.0470546!16s%2Fg%2F11zk3b7l6d?entry=ttu', '_blank');
  }
}

