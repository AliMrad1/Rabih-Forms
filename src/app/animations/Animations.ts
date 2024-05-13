import { trigger, transition, style, animate } from '@angular/animations';

export function pushUpDown() {
  return trigger('pushUpDown', [
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('600ms ease-out', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      animate('600ms ease-in', style({ transform: 'translateY(-100%)' }))
    ])
  ]);
}


export function fadeInOut() {
  return  trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('300ms', style({ opacity: 0 }))
    ])
  ])
}


export function fadeInOut_Modal() {
  return  trigger('fadeInOut_Modal', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1200ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('1200ms', style({ opacity: 0 }))
    ])
  ])
}
