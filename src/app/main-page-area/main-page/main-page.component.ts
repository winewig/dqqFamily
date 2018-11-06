import {Component, OnInit} from '@angular/core';
import {animate, sequence, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'dqq-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('papaHead', [
      // state('toCenter', style({
      //   transform: 'translate( 50vw, 80px )',
      // })),
      transition(
        ':enter',
        sequence([
          style({
            transform: 'translate(-80px, 80px)'
          }),
          animate('2s')
        ])
      )
    ]),
    trigger('mamaHead', [
      state('toCenter', style({
        transform: 'translate( 50vw, 160px )'
      })),
      transition(
        ':enter',
        sequence(([
          style({
            transform: 'translate(100vw, 160px)'
          }),
          animate('2s')
        ]))
      )
    ]),

  ]
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
