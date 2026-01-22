import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { LocalizationService } from '../../services/localization.service';
import { fadeIn, slideInLeft, slideInRight, slideInUp } from '../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [fadeIn, slideInLeft, slideInRight, slideInUp]
})
export class AboutComponent {
  constructor(public l10n: LocalizationService) {}
}

