import { Injectable } from '@angular/core';

import {Stitch} from 'mongodb-stitch-browser-sdk';
import AnonymousCredential from 'mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousCredential';


export const client = Stitch.initializeDefaultAppClient('dqq-gscai');

export enum DbCollections {
  APPOINTMENT = 'appointments',
  FURNITUREBOUGHTLIST = 'furnitureBoughtList',
  CONTRACTS = 'contracts',
  FURNITUREPRIORITY = 'furniturePriority'
}

export enum SortSpecifyKey {
  DATE = 'date'
}

export const SortSpecifyType = {
  ASCENDING: 1,
  DESCENDING: -1
};

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  /**
   * Login into database with anonymous.
   * Return value can be ignored.
   */
  public connectDB() {
    client.auth.loginWithCredential(new AnonymousCredential()).then(
      usr => {
        console.log(`logged in anonymously as user ${usr.id}`);
        return Promise.resolve(usr);
      }
    );
  }

  /**
   * Insert one entry to the database collection
   * Return a promise with the new collection
   * @param collectionName the collection of the database
   * @param content the document to be inserted
   */
  public insertOneEntry(collectionName: string, content: any) {
    return this.insertOneEntrySort(collectionName, content, '', SortSpecifyType.ASCENDING);
  }

  public insertOneEntrySort(collectionName: string, content: any, sortByKey: string, sortByValue: number) {
    return this.callDBFunction('insertOneDocument', [collectionName, content, sortByKey, sortByValue]);
  }


  /**
   * Delete one entry from the database collection
   * Return a promise with the new collection
   * @param collectionName the collection of the database
   * @param content the document to be deleted, should be an object
   */
  public deleteOneEntry(collectionName: string, content: any) {
    return this.deleteOneEntrySort(collectionName, content, '', SortSpecifyType.ASCENDING);
  }

  public deleteOneEntrySort(collectionName: string, content: any, sortByKey: string, sortByValue: number) {
    return this.callDBFunction('deleteOneDocument', [collectionName, content, sortByKey, sortByValue]);
  }

  /**
   * Update one entry in database collection
   * Return a promise with the new collection
   * @param collectionName the collection of the database
   * @param filter the document to be updated
   * @param content the field to be updated in the document
   */
  public updateOneEntry(collectionName: string, filter: any, content: any) {
    return this.updateOneEntrySort(collectionName, filter, content, '', SortSpecifyType.ASCENDING);
  }

  public updateOneEntrySort(collectionName: string, filter: any, content: any, sortByKey: string, sortByValue: number) {
    return this.callDBFunction('updateOneDocument', [collectionName, filter, content, sortByKey, sortByValue]);
  }

  /**
   * Require all entries of a collection
   * Return a promise with the whole entries of the collection
   * @param collectionName the name of the collection
   */
  public listAllEntries(collectionName: string) {
    return this.listAllEntriesSort(collectionName, '', SortSpecifyType.ASCENDING);
  }

  /**
   * Require all entries of a collection sort by a key according the value
   * It a extension of listAllEntries function
   * @param collectionName the name of the collection
   * @param sortByKey according the key the entries will be sort
   * @param sortByValue the value of the key, how to sort
   */
  public listAllEntriesSort(collectionName: string, sortByKey: string, sortByValue: number) {
    return this.callDBFunction('listAllEntries', [collectionName, sortByKey, sortByValue]);
  }


  /**
   * Call database function
   * Return a promise
   * @param functionName: database function name
   * @param args: an array of arguments
   */
  public callDBFunction(functionName: string, args: any[]): Promise<any> {
    return client.callFunction(functionName, args);
  }

}
