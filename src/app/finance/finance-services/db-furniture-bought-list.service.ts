import { Injectable } from '@angular/core';
import {DbService} from '../../db.service';

export interface BoughtEntry {
  content: string;
  amount: number;
}

const furnitureBoughtListCollection = 'furnitureBoughtList';

@Injectable({
  providedIn: 'root'
})
export class DbFurnitureBoughtListService {

  constructor(private dbService: DbService) { }

  public listAllEntriesOfBoughtList(): Promise<BoughtEntry[]> {
    return this.dbService.listAllEntries(furnitureBoughtListCollection);
  }

  public insertEntryToBoughtList(content: string, amount: number) {
    return this.dbService.insertOneEntry(furnitureBoughtListCollection, {'content': `${content}`, 'amount': `${amount}`});
  }

  public deleteEntryInBoughtList(boughtEntry: BoughtEntry) {
    return this.dbService.deleteOneEntry(furnitureBoughtListCollection, boughtEntry);
  }
}
