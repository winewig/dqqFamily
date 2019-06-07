import { Component, OnInit } from '@angular/core';
import {AppointmentsEntry, DbAppointmentsService} from '../finance-services/db-appointments.service';
import {SortSpecifyKey, SortSpecifyType} from '../../db.service';

@Component({
  selector: 'dqq-furniture-to-buy-list',
  templateUrl: './furniture-to-buy-list.component.html',
  styleUrls: ['./furniture-to-buy-list.component.scss']
})
export class FurnitureToBuyListComponent implements OnInit {
  public newAppointmentInputFieldVisible = false; // change to a Input variable
  public appointmentEntries: Promise<AppointmentsEntry[]>;
  public updateRemoveAppointmentSelectedIndex = -1;
  public openAppointmentEditMode = false;

  private selectedContent = '';

  // Calculate the current time to iso, so that it will be shown in datetime-local type
  public get currentDate() {
    return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -8);
  }

  constructor( private dbAppointmentsService: DbAppointmentsService) { }

  ngOnInit() {
    this.appointmentEntries = this.dbAppointmentsService.listAllAppointments(SortSpecifyKey.DATE, SortSpecifyType.ASCENDING);
  }

  public openInputForANewAppointmentEntry() { // openInputForANewEntry()
    this.newAppointmentInputFieldVisible = true;
  }

  // TODO: change to recursive search of 'tr', tr hat rowIndex
  public appointmentEntryLongPressed(event: any) {
    this.updateRemoveAppointmentSelectedIndex = event.target.parentElement.parentElement.rowIndex;
    this.selectedContent = event.target.innerText;
  }

  public updateRemoveAppointmentVisibility(index: number, appointmentEntry: AppointmentsEntry) {
    console.log('unbelievable ' , index, appointmentEntry);
    return this.updateRemoveAppointmentSelectedIndex === index + 1;
  }

  public deleteAppointmentEntry() {
    this.updateRemoveAppointmentSelectedIndex = -1;
    if (!this.selectedContent) {
      return;
    }
    this.appointmentEntries = this.dbAppointmentsService.deleteOneAppointment(
      this.selectedContent, SortSpecifyKey.DATE, SortSpecifyType.ASCENDING
    );
    this.selectedContent = '';
  }

  public updateAppointmentEntry(index: number) {
    this.openAppointmentEditMode = true;
  }

  public addToAppointmentsList(date: any, content: string) {
    if (!content) {
      return;
    }
    this.appointmentEntries = this.dbAppointmentsService.insertNewAppointment(
      date, content, SortSpecifyKey.DATE, SortSpecifyType.ASCENDING);
    this.newAppointmentInputFieldVisible = false;
  }

  public isAppointmentEditMode(index: number) {
    const isSelectedIndex = this.updateRemoveAppointmentSelectedIndex === index + 1;
    // this.updateRemoveAppointmentSelectedIndex = -1;
    return isSelectedIndex && this.openAppointmentEditMode;
  }
}
