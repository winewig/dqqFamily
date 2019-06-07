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

  public updateOneAppointment(oldContent: any, newContent: any, sortByKey: string, sortByValue: number) {
    return this.dbService.updateOneEntrySort(
      DbCollections.APPOINTMENT, oldContent, newContent, sortByKey, sortByValue);
  }
}
