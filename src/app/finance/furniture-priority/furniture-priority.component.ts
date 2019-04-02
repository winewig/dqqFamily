import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dqq-furniture-priority',
  templateUrl: './furniture-priority.component.html',
  styleUrls: ['./furniture-priority.component.scss']
})
export class FurniturePriorityComponent implements OnInit {

  characters = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

  constructor() { }

  ngOnInit() {
  }

}
