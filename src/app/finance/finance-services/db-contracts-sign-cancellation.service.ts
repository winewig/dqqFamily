/* tslint:disable:no-trailing-whitespace */
import { Injectable } from '@angular/core';

import {DbService} from '../../db.service';

export interface Contracts {
  name: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class DbContractsSignCancellationService {

  constructor(private dbService: DbService) { }

  public callDbContracts(): Promise<Contracts[]> {
    return this.dbService.listAllEntries('contracts');
  }

  public insertEntryWithSignContract(content: string) {
    return this.insertEntryToContract('sign', content);
  }

  public insertEntryWithCancellationContract(content: string) {
    return this.insertEntryToContract('cancel', content);
  }

  public insertEntryToContract(name: string, content: string) {
    return this.dbService.insertOneEntry('contracts', {'name': `${name}`, 'content': `${content}`});
  }

  public deleteEntryInSignContract(content: string) {
    return this.deleteEntryInContract('sign', content);
  }

  public deleteEntryInCancellationContract(content: string) {
    return this.deleteEntryInContract('cancel', content);
  }

  public deleteEntryInContract(name: string, content: string) {
    return this.dbService.deleteOneEntry('contracts', {'name': `${name}`, 'content': `${content}`});
  }

  public updateEntryInContract(oldContent: string, newContent: string) {
    return this.dbService.updateOneEntry(
      'contracts',
      {'content': `${oldContent}`},
      {'content': `${newContent}`}
    );
  }
}
