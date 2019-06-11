import { Injectable } from '@angular/core';
import {DbCollections, DbService} from '../../db.service';

export interface AppointmentsEntry {
  date: any;
  content: string;
  importance: string;
}

@Injectable({
  providedIn: 'root'
})
export class DbAppointmentsService {

  constructor(private dbService: DbService) { }

  public listAllAppointments(sortByKey: string, sortByValue: number): Promise<AppointmentsEntry[]> {
    return this.dbService.listAllEntriesSort(DbCollections.APPOINTMENT, sortByKey, sortByValue);
  }

  // By inserting a new document, it has automatically low importance
  public insertNewAppointment(date: any, content: string, sortByKey: string, sortByValue: number) {
    return this.dbService.insertOneEntrySort(
      DbCollections.APPOINTMENT, {'date': `${date}`, 'content': `${content}`,
        'importance': 'low'}, sortByKey , sortByValue);
  }

  public deleteOneAppointment(content: string, sortByKey: string, sortByValue: number) {
    return this.dbService.deleteOneEntrySort(
      DbCollections.APPOINTMENT, {'content': content}, sortByKey, sortByValue
    );
  }

  // Update is only for date and content, importance maybe will be joined.
  public updateOneAppointment(oldContent: string, date: string, newContent: string, sortByKey: string, sortByValue: number) {
    return this.dbService.updateOneEntrySort(
      DbCollections.APPOINTMENT, {'content': oldContent}, {'date': `${date}`, 'content': `${newContent}`},
      sortByKey, sortByValue
    );
  }
}
