import { Component, OnInit } from '@angular/core';
import {DbContractsSignCancellationService} from '../finance-services/db-contracts-sign-cancellation.service';

@Component({
  selector: 'dqq-contract-sign-cancellation',
  templateUrl: './contract-sign-cancellation.component.html',
  styleUrls: ['./contract-sign-cancellation.component.scss']
})
export class ContractSignCancellationComponent implements OnInit {

  public signContractsToDoEntries: Promise<string[]>;
  public cancellationContractsToDoEntries: Promise<string[]>;
  public signContractsInputVisible = false;
  public cancellationContractsInputVisible = false;

  public updateEntrySignContractUpdateInputFieldVisible = false;
  private updateEntryCancellationContractUpdateInputFieldVisible = false;

  private signContractsToDoList = [];
  private cancellationContractsToDoList = [];
  // tableObject.rowIndex starts with 0, but we have one row for table head.
  // So the first element of the table data has index 1.
  private updateRemoveSignContractsSelectedIndex = -1;
  private updateRemoveCancellationContractsSelectedIndex = -1;

  constructor(private dbContractsService: DbContractsSignCancellationService) { }

  ngOnInit() {
    this.dbContractsService.callDbContracts().then(
      allContracts => {
        this.setListsFromDatabase(allContracts);
        this.signContractsToDoEntries = Promise.resolve(this.signContractsToDoList);
        this.cancellationContractsToDoEntries = Promise.resolve(this.cancellationContractsToDoList);
      }
    );
  }

  /**
   * Open the input field for adding a new entry in sign contract
   */
  public openInputForSignContracts() {
    this.signContractsInputVisible = true;
  }

  /**
   * Open the input field for adding a new entry in cancellation contract
   */
  public openInputForCancellationContracts() {
    this.cancellationContractsInputVisible = true;
  }

  /**
   * Add a new entry to the sign contracts list.
   * The new entry will be at first sent to database.
   * With the successful response from the database the list will be updated.
   * @param newToDo the new entry
   */
  public addToDoForSignContracts(newToDo: string) {
    console.log(`To do for sign: ${newToDo}`);
    this.dbContractsService.insertEntryWithSignContract(newToDo).then(
      allContractsList => {
        // The input field will be closed with the successful response from the database.
        this.signContractsInputVisible = false;
        this.setListsFromDatabase(allContractsList);
        this.signContractsToDoEntries = Promise.resolve(this.signContractsToDoList);
      }
    );
  }

  /**
   * Add a new entry to the cancellation contracts list.
   * The new entry will be at first sent to database.
   * With the successful response from the database the list will be updated.
   * @param newToDo the new entry
   */
  public addToDoForCancellationContracts(newToDo: string) {
    console.log(`To do for cancellation: ${newToDo}`);
    this.dbContractsService.insertEntryWithCancellationContract(newToDo).then(
      allContractsList => {
        this.cancellationContractsInputVisible = false;
        this.setListsFromDatabase(allContractsList);
        this.cancellationContractsToDoEntries = Promise.resolve(this.cancellationContractsToDoList);
      }
    );
  }

  /**
   * Puts the entries to the local lists, which will be shown in the UI
   * @param allContracts an array for all entries of signing or cancelling the contracts
   */
  private setListsFromDatabase(allContracts) {
    this.signContractsToDoList = [];
    this.cancellationContractsToDoList = [];
    for ( let i = 0; i < allContracts.length; i++ ) {
      if ( allContracts[i].name === 'sign' ) {
        this.signContractsToDoList.push(allContracts[i].content);
      } else {
        this.cancellationContractsToDoList.push(allContracts[i].content);
      }
    }
  }

  /**
   * Get the index of the sign contract list after long pressing
   * @param event long press event
   */
  signContractsEntryLongPressed(event: any) {
    this.updateRemoveSignContractsSelectedIndex = event.target.parentElement.rowIndex;
  }

  /**
   * Compare the entry index from long pressing with the index of the sign contract list.
   * Return true if they are equal.
   * @param index the index of the list
   */
  updateRemoveSignContractsVisibility(index: number) {
    return this.updateRemoveSignContractsSelectedIndex === index + 1;
  }

  /**
   * Get the index of the cancellation contract list after long pressing
   * @param event long press event
   */
  cancellationContractsEntryLongPressed(event: any) {
    this.updateRemoveCancellationContractsSelectedIndex = event.target.parentElement.parentElement.rowIndex;
  }

  /**
   * Compare the entry index from long pressing with the index of the cancellation contract list.
   * Return true if they are equal.
   * @param index the index of the list
   */
  updateRemoveCancellationContractsVisibility(index: number) {
    return this.updateRemoveCancellationContractsSelectedIndex === index + 1;
  }

  public deleteEntryInSignContract(index: number) {
    this.dbContractsService.deleteEntryInSignContract(this.signContractsToDoList[index]).then(
      allContractsList => {
        this.updateRemoveSignContractsSelectedIndex = -1; // set long press index back
        this.setListsFromDatabase(allContractsList);
        this.signContractsToDoEntries = Promise.resolve(this.signContractsToDoList);
      }
    );
  }

  public deleteEntryInCancellationContract(index: number) {
    this.dbContractsService.deleteEntryInCancellationContract(this.cancellationContractsToDoList[index]).then(
      allContractsList => {
        this.updateRemoveCancellationContractsSelectedIndex = -1; // set long press index back
        this.setListsFromDatabase(allContractsList);
        this.cancellationContractsToDoEntries = Promise.resolve(this.cancellationContractsToDoList);
      }
    );
  }

  public updateEntryInSignContract(index: number, updateToDoSignContract: string) {
    this.dbContractsService.updateEntryInContract(this.signContractsToDoList[index], updateToDoSignContract).then(
      allContractsList => {
        this.setInputFieldInSignContractVisibility(false);
        this.updateRemoveSignContractsSelectedIndex = -1;
        this.setListsFromDatabase(allContractsList);
        this.signContractsToDoEntries = Promise.resolve(this.signContractsToDoList);
      }
    );
  }

  public updateEntryInCancellationContract(index: number, updateToDoCancellationContract: string) {
    this.dbContractsService.updateEntryInContract(this.cancellationContractsToDoList[index], updateToDoCancellationContract).then(
      allContractsList => {
        this.setInputFieldInCancellationContractVisibility(false);
        this.updateRemoveCancellationContractsSelectedIndex = -1;
        this.setListsFromDatabase(allContractsList);
        this.cancellationContractsToDoEntries = Promise.resolve(this.cancellationContractsToDoList);
      }
    );
  }

  public setInputFieldInSignContractVisibility(visibility: boolean) {
    this.updateEntrySignContractUpdateInputFieldVisible = visibility;
  }

  public setInputFieldInCancellationContractVisibility(visibility: boolean) {
    this.updateEntryCancellationContractUpdateInputFieldVisible = visibility;
  }

  public updateInputFieldInSignContractVisible(index) {
    return this.updateRemoveSignContractsSelectedIndex === index + 1
      && this.updateEntrySignContractUpdateInputFieldVisible;
  }

  public updateInputFieldInCancellationContractVisible(index) {
    return this.updateRemoveCancellationContractsSelectedIndex === index + 1
      && this.updateEntryCancellationContractUpdateInputFieldVisible;
  }
}
