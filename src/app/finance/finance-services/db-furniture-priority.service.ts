import { Injectable } from '@angular/core';
import {DbService} from '../../db.service';

export interface ToBuyFurniture {
  priority: string;
  content: string;
  floor: number;
  status: boolean;
}

export enum Priorities {
  HIGH = 'listFurnitureWithHighPriority',
  MID = 'listFurnitureWithMidPriority',
  LOW = 'listFurnitureWithLowPriority'
}

@Injectable({
  providedIn: 'root'
})
export class DbFurniturePriorityService {

  constructor(private dbService: DbService) {}

  /**
   * Return the list entries of the different priority
   * @param functionName the function name of the database
   */
  public callDbPrioritiesFunction(functionName: string): Promise<ToBuyFurniture[]> {
    return this.dbService.callDBFunction(functionName, []);
  }

  /**
   * Return the whole list
   * @param content the unique content, with the content the entry will be found
   * @param status update the bought status
   */
  public updateDbPrioritiesList(content: string, status: boolean): Promise<ToBuyFurniture[]> {
    return this.dbService.updateOneEntry(
      'furniturePriority',
      {'content': `${content}`},
      {'status': status});
  }
}
