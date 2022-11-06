import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AddressEntry} from './address-entry';

@Injectable()
export class NotificationService {
  selectedElement = new BehaviorSubject<AddressEntry>(null);

  constructor() {
  }

  public selectionChanged(address: AddressEntry): void {
    this.selectedElement.next(address);
  }
}

