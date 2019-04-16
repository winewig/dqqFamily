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
  public boughtEntries: Promise<BoughtEntry[]>;

  // new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number), return string
  constructor(private dbBoughtListService: DbFurnitureBoughtListService) { }

  ngOnInit() {
    this.dbBoughtListService.listAllEntriesOfBoughtList().then(
      boughtList => {
        this.boughtEntries = Promise.resolve(boughtList);
      }
    );
  }

  public openInputForANewBoughtEntry() {
    this.newBoughtEntryInputFieldVisible = true;
  }

  public addToBoughtList(content: string, amount: string) {
    const contentAmount = Number(amount);
    // Return, if there is no content or amount not a valid amount
    if (!content.length || contentAmount <= 0) {
      return;
    }
    this.dbBoughtListService.insertEntryToBoughtList(content, contentAmount).then(
      boughtList => {
        this.newBoughtEntryInputFieldVisible = false;
        this.boughtEntries = Promise.resolve(boughtList);
      }
    );
  }
}
