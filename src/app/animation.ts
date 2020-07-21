import { trigger, transition, state, style, animate } from '@angular/animations';

export let fade = trigger("fade", [

    state('void', style({ opacity: 0, backgroundColor: 'purple' })),

    transition(':enter, :leave', [
        animate(2000)
    ]),

]);

export let slide = trigger("slide", [
    transition(":enter", [
        style({ transform: 'translateY(-20px)' }),
        animate(2000)
    ]),

    transition(":leave", [
        style({ transform: 'translateX(-100px' }),
        animate(3000)
    ])
])