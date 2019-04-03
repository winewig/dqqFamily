import { Component, OnInit } from '@angular/core';
import {DbFurniturePriorityService, ToBuyFurniture} from '../finance-services/db-furniture-priority.service';


@Component({
  selector: 'dqq-furniture-priority',
  templateUrl: './furniture-priority.component.html',
  styleUrls: ['./furniture-priority.component.scss']
})
export class FurniturePriorityComponent implements OnInit {

  public highPriorityFurnitures: Promise<ToBuyFurniture[]>;
  public midPriorityFurnitures: Promise<ToBuyFurniture[]>;
  public lowPriorityFurnitures: Promise<ToBuyFurniture[]>;

  constructor(private dbFurniturePriorityService: DbFurniturePriorityService) { }

  ngOnInit() {
    this.highPriorityFurnitures = this.dbFurniturePriorityService.callDbHighPriorities();
    this.midPriorityFurnitures = this.dbFurniturePriorityService.callDbMidPriorities();
    this.lowPriorityFurnitures = this.dbFurniturePriorityService.callDbLowPriorities();
  }

}
