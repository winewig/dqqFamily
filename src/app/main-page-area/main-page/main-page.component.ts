import {Component} from '@angular/core';
import {animate, keyframes, sequence, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'dqq-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('papaHead', [
      transition(
        ':enter',
        sequence([
          style({
            position: 'absolute',
            transform: 'translateX(-50vw)',
            opacity: 0
          }),
          animate('2s')
        ])
      )
    ]),
    trigger('mamaHead', [
      transition(
        ':enter',
        sequence(([
          style({
            position: 'absolute',
            transform: 'translateX(50vw)',
            opacity: 0
          }),
          animate('2s')
        ]))
      )
    ]),
    trigger('imgBottom', [
      transition(
        ':enter',
        sequence([
          style({
            transform: 'translateY(50vh)',
            opacity: 0
          }),
          animate('2s 2s'),
          style({
            opacity: 1,
            transform: 'rotateZ(0deg)'
          }),
          animate('1.5s', keyframes([
            style({transform: 'rotateZ(30deg)', offset: 0.143}),
            style({transform: 'rotateZ(-30deg)', offset: 0.428}),
            style({transform: 'rotateZ(15deg)', offset: 0.714}),
            style({transform: 'rotateZ(-15deg)', offset: 1}),
          ])),
          animate('3s', keyframes([
            style({transform: 'scale(1.8, 1.8)', offset: 0.5}),
            style({transform: 'scale(1,1)', offset: 0.51}),
            style({transform: 'scale(1.5, 1.5)', offset: 1}),
          ])),
        ])
      )
    ])
  ]
})
export class MainPageComponent {
}
