import { Injectable } from '@angular/core';
import {noop} from 'rxjs';
import {Router} from '@angular/router';
import {User} from './signup/model/user';
import {Author, Book} from './books/model/book';
import {NotificationService} from './signup/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string;
  private users = [
    new User('admin', 'password'),
    ];

  constructor(private router: Router, private notificationService: NotificationService) { }

  login(username: string, password: string): boolean {
    // tslint:disable-next-line:radix
    if (this.users.find(user => user.username === username) && this.users.find(user => user.password === password)) {
      sessionStorage.setItem('username', username);
      if (this.redirectUrl){ this.router.navigate([this.redirectUrl]).then(noop); }
      this.redirectUrl = null;
      return true;
    }

    return false;
  }

  logout(): any {
    sessionStorage.removeItem('username');
  }

  getUser(): any {
    return sessionStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  public addUser(u: User): void {
    this.users.push(u);
  }


}
