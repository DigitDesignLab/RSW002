import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsAppButtonComponent {
  phone = '22374740303';
  message = encodeURIComponent('Bonjour, je souhaite passer une commande.');
  
  get whatsappUrl(): string {
    return `https://wa.me/${this.phone}?text=${this.message}`;
  }
}

