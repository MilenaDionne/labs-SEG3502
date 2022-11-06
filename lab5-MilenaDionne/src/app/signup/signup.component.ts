import {Component, OnInit} from '@angular/core';
import {User} from './model/user';
import {NotificationService} from './notification.service';
import {UserDbService} from './firestore/user-db.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [NotificationService]
})
export class SignupComponent implements OnInit {
  users: User[] = [];
  currentUser: User = null;
  message: string;
  hideMsg = true;
  msgStyle = {
    color: null,
    'background-color': 'white',
    'font-size': '150%',
  };



  constructor(private notificationService: NotificationService, private store: UserDbService) { }


  ngOnInit(): void {
    const newUser = new User('', '', null, '');
    this.users = [newUser, ...this.users];
    this.select(newUser);
    this.message = '';
    this.store.getUser().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as User;
      });
    });
  }

  select(user: User): void {
    this.currentUser = user;
    this.notificationService.selectionChanged(user);
  }

  showMessage(type: string, msg: string): void {
    this.msgStyle.color = type === 'error' ? 'red' : 'blue';
    this.message = msg;
    this.hideMsg = false;
    setTimeout(
      () => {
        this.hideMsg = true;
      }, 2500
    );
  }
  deleteCurrent(): void {
    if (this.currentUser.id !== null) {
      this.users =
        this.users.filter((address: User) => address !== this.currentUser);
      // **** permanently delete
      this.store.deleteUser(this.currentUser.id)
        .then(_ =>
          this.showMessage('info', 'The address entry was successfully deleted')
        )
        .catch(_ =>
          this.showMessage('error', 'Error unable to delete the address entry')
        );
      this.currentUser = null;
    }
  }

  saveCurrent(): void {
    if (this.currentUser.id === null) {
      this.store.createUser(this.currentUser)
        .then(
          docRef => {
            this.currentUser.id = docRef.id;
            this.showMessage('info', 'The address entry was successfully saved');
          }
        )
        .catch(_ =>
          this.showMessage('error', 'Error unable to save the address entry')
        );
    } else {
      this.store.updateUser(this.currentUser)
        .then(_ =>
          this.showMessage('info', 'The address entry was successfully updated')
        )
        .catch(_ =>
          this.showMessage('error', 'Error unable to update the address entry')
        );
    }
  }


  addUser(): void {
    const newUser = new User('', '', null, '');
    this.users = [newUser, ...this.users];
    this.select(newUser);
  }
}
