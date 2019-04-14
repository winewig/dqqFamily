import { Component, OnInit } from '@angular/core';
import {BoughtEntry, DbFurnitureBoughtListService} from '../finance-services/db-furniture-bought-list.service';

@Component({
  selector: 'dqq-furniture-bought-list',
  templateUrl: './furniture-bought-list.component.html',
  styleUrls: ['./furniture-bought-list.component.scss']
})
export class FurnitureBoughtListComponent implements OnInit {
  public newBoughtEntryInputFieldVisible = false;
  public boughtList: BoughtEntry[] = [];

  // new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number), return string
  constructor(private dbBoughtListService: DbFurnitureBoughtListService) { }

  ngOnInit() {
  }

  public openInputForANewBoughtEntry() {
    this.newBoughtEntryInputFieldVisible = true;
  }

  public addToBoughtList(content: string, amount: number) {
    // Return, if there is no content or amount not a valid amount
    if (!!content.length || typeof amount !== 'number' || amount <= 0) {
      return;
    }
    this.dbBoughtListService.insertEntryToBoughtList(content, amount).then(
      boughtList => {
        this.boughtList = [];
        this.boughtList = boughtList;
      }
    );
  }
}
