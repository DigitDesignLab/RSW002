import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.8s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1 }))
  ])
]);

export const slideInUp = trigger('slideInUp', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'translateY(50px) scale(0.9)' 
    }),
    animate('0.8s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
      opacity: 1, 
      transform: 'translateY(0) scale(1)' 
    }))
  ])
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'translateX(-80px) rotate(-5deg)' 
    }),
    animate('0.8s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
      opacity: 1, 
      transform: 'translateX(0) rotate(0deg)' 
    }))
  ])
]);

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'translateX(80px) rotate(5deg)' 
    }),
    animate('0.8s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
      opacity: 1, 
      transform: 'translateX(0) rotate(0deg)' 
    }))
  ])
]);

export const bounceIn = trigger('bounceIn', [
  transition(':enter', [
    animate('1s cubic-bezier(0.68, -0.55, 0.265, 1.55)', keyframes([
      style({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
      style({ opacity: 1, transform: 'scale(1.1)', offset: 0.6 }),
      style({ transform: 'scale(0.95)', offset: 0.8 }),
      style({ transform: 'scale(1)', offset: 1 })
    ]))
  ])
]);

export const zoomIn = trigger('zoomIn', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'scale(0.5)' 
    }),
    animate('0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
      opacity: 1, 
      transform: 'scale(1)' 
    }))
  ])
]);

export const rotateIn = trigger('rotateIn', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'rotate(-180deg) scale(0.5)' 
    }),
    animate('0.8s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
      opacity: 1, 
      transform: 'rotate(0deg) scale(1)' 
    }))
  ])
]);

export const staggerAnimation = trigger('stagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px) scale(0.9)' }),
      stagger(150, [
        animate('0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
          opacity: 1, 
          transform: 'translateY(0) scale(1)' 
        }))
      ])
    ], { optional: true })
  ])
]);

export const fadeInScale = trigger('fadeInScale', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'scale(0.8) translateY(20px)' 
    }),
    animate('0.7s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
      opacity: 1, 
      transform: 'scale(1) translateY(0)' 
    }))
  ])
]);

