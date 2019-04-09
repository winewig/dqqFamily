import { Injectable } from '@angular/core';
import {DbService} from '../../db.service';

export interface ToBuyFurniture {
  priority: string;
  content: string;
  floor: number;
}

@Injectable({
  providedIn: 'root'
})
export class DbFurniturePriorityService {

  constructor(private dbService: DbService) {}

  public callDbHighPriorities(): Promise<ToBuyFurniture[]> {
    return this.dbService.callDBFunction('listFurnitureWithHighPriority', []);
  }

  public callDbMidPriorities(): Promise<ToBuyFurniture[]> {
    return this.dbService.callDBFunction('listFurnitureWithMidPriority', []);
  }

  public callDbLowPriorities(): Promise<ToBuyFurniture[]> {
    return this.dbService.callDBFunction('listFurnitureWithLowPriority', []);
  }
}
