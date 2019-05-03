import { Component, OnInit } from '@angular/core';
import {DbFurniturePriorityService, Priorities, ToBuyFurniture} from '../finance-services/db-furniture-priority.service';


@Component({
  selector: 'dqq-furniture-priority',
  templateUrl: './furniture-priority.component.html',
  styleUrls: ['./furniture-priority.component.scss']
})
export class FurniturePriorityComponent implements OnInit {

  public highPriorityFurnitures: Promise<ToBuyFurniture[]>;
  public midPriorityFurnitures: Promise<ToBuyFurniture[]>;
  public lowPriorityFurnitures: Promise<ToBuyFurniture[]>;
  public Priorities: typeof Priorities = Priorities;
  // private highPriorityFurnitureListIndex = -1;


constructor(private dbFurniturePriorityService: DbFurniturePriorityService) { }

  ngOnInit() {
    this.highPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(Priorities.HIGH);
    this.midPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(Priorities.MID);
    this.lowPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(Priorities.LOW);
  }

  public updatePriorityFurniture(event: any, status: boolean) {
    const content = event.target.parentElement.innerText;
    return this.dbFurniturePriorityService.updateDbPrioritiesList(content, !status);
  }

  public updateHighPriorityFurniture(event: any, status: boolean, priorityList: Priorities) {
    this.updatePriorityFurniture(event, status).then(
      () => this.highPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(priorityList)
    );
  }

  public updateMidPriorityFurniture(event: any, status: boolean, priorityList: Priorities) {
    this.updatePriorityFurniture(event, status).then(
      () => this.midPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(priorityList)
    );
  }

  public updateLowPriorityFurniture(event: any, status: boolean, priorityList: Priorities) {
    this.updatePriorityFurniture(event, status).then(
      () => this.lowPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(priorityList)
    );
  }
}
