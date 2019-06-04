import { Injectable } from '@angular/core';
import {DbCollections, DbService} from '../../db.service';

export interface BoughtEntry {
  content: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class DbFurnitureBoughtListService {

  constructor(private dbService: DbService) { }

  public listAllEntriesOfBoughtList(): Promise<BoughtEntry[]> {
    return this.dbService.listAllEntries(DbCollections.FURNITUREBOUGHTLIST);
  }

  public insertEntryToBoughtList(content: string, amount: number) {
    return this.dbService.insertOneEntry(DbCollections.FURNITUREBOUGHTLIST, {'content': `${content}`, 'amount': `${amount}`});
  }

  public deleteEntryInBoughtList(boughtEntry: BoughtEntry) {
    return this.dbService.deleteOneEntry(DbCollections.FURNITUREBOUGHTLIST, boughtEntry);
  }
}
