import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationService } from '../../../services/localization.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public l10n: LocalizationService) {}
  
  instagramUrl = 'https://www.instagram.com/boulangeriesofia';
  tiktokUrl = 'https://www.tiktok.com/@sofiaboulangerie74740303';
  phone = '74740303';
  currentYear = new Date().getFullYear();
}

