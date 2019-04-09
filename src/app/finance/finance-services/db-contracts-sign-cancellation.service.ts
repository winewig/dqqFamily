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
    return this.dbService.callDBFunction('listAllContracts', []);
  }

  public insertEntryWithSignContract(content: string) {
    return this.dbService.insertEntry('contracts', {'name': 'sign', 'content': `${content}`});
  }

  public insertEntryWithCancellationContract(content: string) {
    return this.dbService.insertEntry('contracts', {'name': 'cancel', 'content': `${content}`});
  }

}
