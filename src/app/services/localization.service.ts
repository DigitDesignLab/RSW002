import { Injectable, signal } from '@angular/core';

export interface LocalizationKeys {
  // Header & Navigation
  'nav.home': string;
  'nav.menu': string;
  'nav.about': string;
  'nav.delivery': string;
  'nav.contact': string;
  
  // Home
  'home.hero.title': string;
  'home.hero.subtitle': string;
  'home.hero.order': string;
  'home.hero.find': string;
  
  // Menu
  'menu.title': string;
  'menu.noSpice': string;
  'menu.forKids': string;
  'menu.order': string;
  
  // About
  'about.title': string;
  'about.story': string;
  'about.popularity': string;
  'about.celebrities': string;
  
  // Delivery
  'delivery.title': string;
  'delivery.description': string;
  'delivery.whatsapp': string;
  
  // Contact
  'contact.title': string;
  'contact.address': string;
  'contact.phone': string;
  'contact.hours': string;
  'contact.call': string;
  'contact.map': string;
  
  // Footer
  'footer.follow': string;
  'footer.rights': string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private translations: LocalizationKeys = {
    'nav.home': 'Accueil',
    'nav.menu': 'Menu',
    'nav.about': 'À propos',
    'nav.delivery': 'Livraison',
    'nav.contact': 'Contact',
    
    'home.hero.title': 'La Boulangerie Pâtisserie Sofia',
    'home.hero.subtitle': 'Le meilleur de la boulangerie et pâtisserie à Bamako',
    'home.hero.order': 'Commander',
    'home.hero.find': 'Nous trouver',
    
    'menu.title': 'Notre Menu',
    'menu.noSpice': 'Sans piment',
    'menu.forKids': 'Enfants',
    'menu.order': 'Commander',
    
    'about.title': 'À propos de nous',
    'about.story': 'Notre histoire',
    'about.popularity': 'Popularité',
    'about.celebrities': 'Célébrités',
    
    'delivery.title': 'Livraison',
    'delivery.description': 'Nous livrons vos commandes rapidement et en toute sécurité.',
    'delivery.whatsapp': 'Commander via WhatsApp',
    
    'contact.title': 'Contactez-nous',
    'contact.address': 'Sebenikoro, Bamako',
    'contact.phone': '74 74 03 03',
    'contact.hours': 'Ouvert tous les jours de 06h00 à 23h00',
    'contact.call': 'Appeler',
    'contact.map': 'Voir sur la carte',
    
    'footer.follow': 'Suivez-nous',
    'footer.rights': 'Tous droits réservés'
  };
  
  get(key: keyof LocalizationKeys): string {
    return this.translations[key] || key;
  }
}

