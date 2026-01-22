import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { LocalizationService } from '../../services/localization.service';
import { fadeIn, slideInUp } from '../../animations';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badges?: string[];
}

type Category = 'Tous' | 'Pains' | 'Viennoiseries' | 'Pâtisseries' | 'Sandwichs' | 'Boissons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  animations: [fadeIn, slideInUp]
})
export class MenuComponent {
  constructor(public l10n: LocalizationService) {}
  
  phone = '22374740303';
  selectedCategory: Category = 'Tous';
  
  categories: Category[] = ['Tous', 'Pains', 'Viennoiseries', 'Pâtisseries', 'Sandwichs', 'Boissons'];
  
  allMenuItems: MenuItem[] = [
    // Pains
    {
      id: 1,
      name: 'Pain de campagne',
      description: 'Pain artisanal cuit au feu de bois, croustillant à l\'extérieur et moelleux à l\'intérieur',
      price: 500,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
      category: 'Pains',
      badges: []
    },
    {
      id: 2,
      name: 'Baguette traditionnelle',
      description: 'Baguette française authentique, croûte dorée et mie aérée',
      price: 600,
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400',
      category: 'Pains',
      badges: []
    },
    {
      id: 3,
      name: 'Pain complet',
      description: 'Pain aux céréales complètes, riche en fibres et en saveurs',
      price: 700,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
      category: 'Pains',
      badges: []
    },
    {
      id: 4,
      name: 'Pain de mie',
      description: 'Pain de mie moelleux, parfait pour les sandwichs',
      price: 800,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
      category: 'Pains',
      badges: []
    },
    // Viennoiseries
    {
      id: 5,
      name: 'Croissant au beurre',
      description: 'Croissant feuilleté au beurre AOP, croustillant et fondant',
      price: 800,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
      category: 'Viennoiseries',
      badges: []
    },
    {
      id: 6,
      name: 'Pain au chocolat',
      description: 'Viennoiserie feuilletée avec barres de chocolat belge',
      price: 800,
      image: 'https://images.unsplash.com/photo-1612929633736-8fe44dd7ec7b?w=400',
      category: 'Viennoiseries',
      badges: []
    },
    {
      id: 7,
      name: 'Chausson aux pommes',
      description: 'Chausson feuilleté garni de compote de pommes maison',
      price: 900,
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400',
      category: 'Viennoiseries',
      badges: []
    },
    {
      id: 8,
      name: 'Brioche nature',
      description: 'Brioche moelleuse et légère, parfumée à la vanille',
      price: 1000,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
      category: 'Viennoiseries',
      badges: []
    },
    {
      id: 9,
      name: 'Pain aux raisins',
      description: 'Viennoiserie aux raisins secs et crème pâtissière',
      price: 1000,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
      category: 'Viennoiseries',
      badges: []
    },
    // Pâtisseries
    {
      id: 10,
      name: 'Tarte aux pommes',
      description: 'Tarte traditionnelle aux pommes, pâte sablée maison',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400',
      category: 'Pâtisseries',
      badges: []
    },
    {
      id: 11,
      name: 'Éclair au chocolat',
      description: 'Éclair garni de crème pâtissière et nappé de chocolat',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
      category: 'Pâtisseries',
      badges: []
    },
    {
      id: 12,
      name: 'Mille-feuille',
      description: 'Pâtisserie feuilletée à la crème pâtissière et glaçage',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400',
      category: 'Pâtisseries',
      badges: []
    },
    {
      id: 13,
      name: 'Tarte au citron',
      description: 'Tarte au citron meringuée, acidulée et rafraîchissante',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400',
      category: 'Pâtisseries',
      badges: []
    },
    {
      id: 14,
      name: 'Paris-Brest',
      description: 'Pâtisserie choux fourrée à la crème pralinée',
      price: 2200,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
      category: 'Pâtisseries',
      badges: []
    },
    {
      id: 15,
      name: 'Opéra',
      description: 'Gâteau au café et chocolat, couches de biscuit Joconde',
      price: 2800,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
      category: 'Pâtisseries',
      badges: []
    },
    {
      id: 16,
      name: 'Tartelette aux fraises',
      description: 'Tartelette individuelle aux fraises fraîches et crème pâtissière',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400',
      category: 'Pâtisseries',
      badges: []
    },
    // Sandwichs
    {
      id: 17,
      name: 'Sandwich jambon-fromage',
      description: 'Sandwich frais avec jambon de qualité et fromage, beurre',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400',
      category: 'Sandwichs',
      badges: []
    },
    {
      id: 18,
      name: 'Sandwich poulet-crudités',
      description: 'Sandwich au poulet grillé avec crudités fraîches et mayonnaise',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400',
      category: 'Sandwichs',
      badges: []
    },
    {
      id: 19,
      name: 'Sandwich thon-crudités',
      description: 'Sandwich au thon avec crudités, œuf et mayonnaise',
      price: 1700,
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400',
      category: 'Sandwichs',
      badges: []
    },
    {
      id: 20,
      name: 'Sandwich végétarien',
      description: 'Sandwich aux légumes frais, fromage et sauce au choix',
      price: 1600,
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400',
      category: 'Sandwichs',
      badges: []
    },
    {
      id: 21,
      name: 'Panini jambon-fromage',
      description: 'Panini grillé au jambon et fromage fondu',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400',
      category: 'Sandwichs',
      badges: []
    },
    // Boissons
    {
      id: 22,
      name: 'Café expresso',
      description: 'Café torréfié localement, corsé et aromatique',
      price: 500,
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
      category: 'Boissons',
      badges: []
    },
    {
      id: 23,
      name: 'Café allongé',
      description: 'Expresso allongé avec eau chaude',
      price: 600,
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
      category: 'Boissons',
      badges: []
    },
    {
      id: 24,
      name: 'Cappuccino',
      description: 'Expresso avec lait mousseux et cacao',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
      category: 'Boissons',
      badges: []
    },
    {
      id: 25,
      name: 'Café au lait',
      description: 'Café avec lait chaud, doux et onctueux',
      price: 800,
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
      category: 'Boissons',
      badges: []
    },
    {
      id: 26,
      name: 'Thé à la menthe',
      description: 'Thé vert à la menthe fraîche, traditionnel',
      price: 700,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
      category: 'Boissons',
      badges: []
    },
    {
      id: 27,
      name: 'Jus de fruits frais',
      description: 'Jus pressé du jour (orange, mangue, ananas)',
      price: 1000,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
      category: 'Boissons',
      badges: []
    },
    {
      id: 28,
      name: 'Smoothie fruits',
      description: 'Smoothie aux fruits frais, onctueux et vitaminé',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
      category: 'Boissons',
      badges: []
    }
  ];
  
  get menuItems(): MenuItem[] {
    if (this.selectedCategory === 'Tous') {
      return this.allMenuItems;
    }
    return this.allMenuItems.filter(item => item.category === this.selectedCategory);
  }
  
  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
  
  orderViaWhatsApp(item: MenuItem) {
    const message = encodeURIComponent(`Bonjour, je souhaite commander: ${item.name} - ${item.price} FCFA`);
    window.open(`https://wa.me/${this.phone}?text=${message}`, '_blank');
  }
}

