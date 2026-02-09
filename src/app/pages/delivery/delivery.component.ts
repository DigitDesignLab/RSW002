import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LocalizationService } from '../../services/localization.service';
import { fadeIn, slideInUp, slideInLeft, slideInRight } from '../../animations';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css',
  animations: [fadeIn, slideInUp, slideInLeft, slideInRight]
})
export class DeliveryComponent {
  constructor(public l10n: LocalizationService) {}
  
  phone = '22374740303';
  
  orderViaWhatsApp() {
    const message = encodeURIComponent('Bonjour, je souhaite passer une commande pour la livraison.');
    window.open(`https://wa.me/${this.phone}?text=${message}`, '_blank');
  }
}

