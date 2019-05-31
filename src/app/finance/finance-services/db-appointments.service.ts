import { Injectable } from '@angular/core';
import {DbService} from '../../db.service';

const appointmentCollection = 'appointments';

export interface AppointmentsEntry {
  date: any; // maybe date type
  content: string;
  importance: string;
}

@Injectable({
  providedIn: 'root'
})
export class DbAppointmentsService {

  constructor(private dbService: DbService) { }

  public listAllAppointments(): Promise<AppointmentsEntry[]> {
    return this.dbService.listAllEntries(appointmentCollection);
  }

  public insertNewAppointment(date: any, content: string) {
    return this.dbService.insertOneEntry(appointmentCollection, {'date': `${date}`, 'content': `${content}`, 'importance': 'low'});
  }
}
