import { Injectable } from '@angular/core';

import {Stitch} from 'mongodb-stitch-browser-sdk';
import AnonymousCredential from 'mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousCredential';


export const client = Stitch.initializeDefaultAppClient('dqq-gscai');

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
    return this.callDBFunction('insertOneDocument', [collectionName, content]);
  }


  /**
   * Delete one entry from the database collection
   * Return a promise with the new collection
   * @param collectionName the collection of the database
   * @param content the document to be deleted
   */
  public deleteOneEntry(collectionName: string, content: any) {
    return this.callDBFunction('deleteOneDocument', [collectionName, content]);
  }

  /**
   * Update one entry in database collection
   * Return a promise with the new collection
   * @param collectionName the collection of the database
   * @param filter the document to be updated
   * @param content the field to be updated in the document
   */
  public updateOneEntry(collectionName: string, filter: any, content: any) {
    return this.callDBFunction('updateOneDocument', [collectionName, filter, content]);
  }

  /**
   * Require all entries of a collection
   * Return a promise with the whole entries of the collection
   * @param collectionName the name of the collection
   */
  public listAllEntries(collectionName: string) {
    return this.callDBFunction('listAllEntries', [collectionName]);
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
