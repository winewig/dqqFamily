import { Injectable } from '@angular/core';

import {Stitch, AnonymousCredential, StitchUser} from 'mongodb-stitch-browser-sdk';

export const client = Stitch.initializeDefaultAppClient('dqq-gscai');
export interface ToBuyFurniture {
  priority: string;
  content: string;
  floor: number;
}

@Injectable({
  providedIn: 'root'
})
export class DbFurniturePriorityService {

  constructor() {
    // this.userLogin().then(
    //   user => {
    //     console.log(`User: ${user}`);
    //     client.callFunction('allPriorities', []).then(
    //       result => {
    //         console.log(`Result: ${JSON.stringify(result)}`);
    //       }
    //     );
    //   });
  }

  private userLogin(): Promise<StitchUser> {
    return client.auth.loginWithCredential(new AnonymousCredential());
  }

  public callDbHighPriorities(): Promise<ToBuyFurniture[]> {
    return client.callFunction('listFurnitureWithHighPriority', []);
  }

  public callDbMidPriorities(): Promise<ToBuyFurniture[]> {
    return client.callFunction('listFurnitureWithMidPriority', []);
  }

  public callDbLowPriorities(): Promise<ToBuyFurniture[]> {
    return client.callFunction('listFurnitureWithLowPriority', []);
  }
}
