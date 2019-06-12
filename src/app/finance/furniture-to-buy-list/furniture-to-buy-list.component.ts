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

  public changedAppointmentEntryDate: any;
  public changedAppointmentEntryContent = '';

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

  public appointmentEntryLongPressed(event: any) {
    const trNode = this.nodeFinder(event.target, 'TR');
    this.updateRemoveAppointmentSelectedIndex = trNode.rowIndex;
    this.selectedContent = event.target.innerText;
  }

  private nodeFinder(currentNode: HTMLElement, searchNodeName: string) {
    if ( searchNodeName === currentNode.nodeName) {
      return currentNode;
    }
    return this.nodeFinder(currentNode.parentElement, searchNodeName);
  }

  public updateRemoveAppointmentVisibility(index: number, appointmentEntry: AppointmentsEntry) {
    this.changedAppointmentEntryDate = appointmentEntry.date;
    this.changedAppointmentEntryContent = appointmentEntry.content;
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

  public changeAppointmentEntry() {
    this.openAppointmentEditMode = true;
  }

  public updateAppointmentEntry(date: any, content: string, oldContent: string) {
    this.appointmentEntries = this.dbAppointmentsService.updateOneAppointment(
      oldContent, date, content, SortSpecifyKey.DATE, SortSpecifyType.ASCENDING
    );
    this.openAppointmentEditMode = false;
    this.updateRemoveAppointmentSelectedIndex = -1;
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
