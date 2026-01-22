import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LocalizationService } from '../../services/localization.service';
import { fadeIn, slideInUp } from '../../animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [fadeIn, slideInUp]
})
export class HomeComponent {
  constructor(public l10n: LocalizationService) {}
}

