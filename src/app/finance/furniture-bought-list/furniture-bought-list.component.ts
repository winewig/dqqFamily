import {Component, OnInit} from '@angular/core';
import {BoughtEntry, DbFurnitureBoughtListService} from '../finance-services/db-furniture-bought-list.service';

@Component({
  selector: 'dqq-furniture-bought-list',
  templateUrl: './furniture-bought-list.component.html',
  styleUrls: ['./furniture-bought-list.component.scss']
})
export class FurnitureBoughtListComponent implements OnInit {
  public newBoughtEntryInputFieldVisible = false; // change to a Input variable
  public boughtList: BoughtEntry[] = [];
  public boughtEntries: Promise<BoughtEntry[]>;
  public boughtEntriesLength: Promise<number>;
  public boughtEntriesSum: Promise<string>;
  private updateRemoveBoughtListSelectedIndex = -1;

  // new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number), return string
  constructor(private dbBoughtListService: DbFurnitureBoughtListService) { }

  ngOnInit() {
    this.dbBoughtListService.listAllEntriesOfBoughtList().then(
      boughtList => {
        this.listUpdate(boughtList);
      }
    );
  }

  public amountSum(boughtList: BoughtEntry[] ): number {
    let amountSum = 0;
    for (let i = 0; i < boughtList.length; i++) {
      amountSum += Number(boughtList[i].amount);
    }
    return amountSum;
  }

  public listUpdate(boughtList: BoughtEntry[]) {
    this.boughtList = boughtList;
    this.boughtEntries = Promise.resolve(boughtList);
    this.boughtEntriesLength = Promise.resolve(boughtList.length);
    this.boughtEntriesSum = Promise.resolve(this.convertAmountToString(this.amountSum(boughtList)));
  }

  public convertAmountToString(amount: number): string {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  }

  public openInputForANewBoughtEntry() { // openInputForANewEntry()
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
        this.listUpdate(boughtList);
      }
    );
  }

  public boughtListEntryLongPressed(event: any) {
    this.updateRemoveBoughtListSelectedIndex = event.target.parentElement.rowIndex - 1;
  }

  public updateRemoveBoughtListVisibility(index: number): boolean {
    return this.updateRemoveBoughtListSelectedIndex === index;
  }

  deleteBoughtListEntry(index: number) {
    this.dbBoughtListService.deleteEntryInBoughtList(this.boughtList[index]).then(
      boughtList => {
        this.updateRemoveBoughtListSelectedIndex = -1;
        this.listUpdate(boughtList);
      }
    );
  }
}
