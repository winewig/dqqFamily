import {Component, OnInit} from '@angular/core';
import {animate, sequence, style, transition, trigger} from '@angular/animations';

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
            transform: 'rotateZ(50deg)'
          }),
          animate('0.8s'),
          style({
            transform: 'rotateZ(-50deg)'
          }),
          animate('0.8s'),
          style({
            transform: 'scale(2,2)'
          }),
          animate('1s')
        ])
      )
    ])
  ]
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
