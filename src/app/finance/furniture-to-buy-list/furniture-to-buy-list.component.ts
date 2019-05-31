import { Component, OnInit } from '@angular/core';
import {AppointmentsEntry, DbAppointmentsService} from '../finance-services/db-appointments.service';

@Component({
  selector: 'dqq-furniture-to-buy-list',
  templateUrl: './furniture-to-buy-list.component.html',
  styleUrls: ['./furniture-to-buy-list.component.scss']
})
export class FurnitureToBuyListComponent implements OnInit {
  public newAppointmentInputFieldVisible = false; // change to a Input variable
  public appointmentEntries: Promise<AppointmentsEntry[]>;

  // Calculate the current time to iso, so that it will be shown in datetime-local type
  public get currentDate() {
    return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -8);
  }

  constructor( private dbAppointmentsService: DbAppointmentsService) { }

  ngOnInit() {
    this.appointmentEntries = this.dbAppointmentsService.listAllAppointments();
  }

  public openInputForANewAppointmentEntry() { // openInputForANewEntry()
    this.newAppointmentInputFieldVisible = true;
  }

  public appointmentEntryLongPressed(event: any) {

  }

  updateRemoveAppointmentVisibility(index: number) {

  }

  deleteAppointmentEntry(index: number) {

  }

  public addToAppointmentsList(date: any, content: string) {
    // Get the format 2019-05-31T15:11, Date.parse(string)
    // https://stackoverflow.com/questions/31071999/date-comparison-in-mongodb
    console.log(`date ist: ${date}, and content is: ${content}`);
    this.dbAppointmentsService.insertNewAppointment(date, content)
      .then( appointmentEntries => {
        this.newAppointmentInputFieldVisible = false;
        this.appointmentEntries = Promise.resolve(appointmentEntries);
      });
  }
}
