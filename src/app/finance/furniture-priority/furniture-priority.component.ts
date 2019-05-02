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
  private highPriorityFurnitureListIndex = -1;

  constructor(private dbFurniturePriorityService: DbFurniturePriorityService) { }

  ngOnInit() {
    this.highPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(Priorities.HIGH);
    this.midPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(Priorities.MID);
    this.lowPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(Priorities.LOW);
  }

  public updateHighPriorityFurniture(event: any, status: boolean) {
    const content = event.target.parentElement.innerText;
    this.highPriorityFurnitureListIndex = event.target.parentElement.rowIndex - 1;
    this.dbFurniturePriorityService.updateDbPrioritiesList(content, !status).then(
      () => this.highPriorityFurnitures = this.dbFurniturePriorityService.callDbPrioritiesFunction(Priorities.HIGH)
    );
  }
}
