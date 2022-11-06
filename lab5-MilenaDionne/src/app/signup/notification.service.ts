import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from './model/user';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  selectedElement = new BehaviorSubject<User>(null);
  constructor() { }

  public selectionChanged(user: User): void {
    this.selectedElement.next(user);
  }
}
