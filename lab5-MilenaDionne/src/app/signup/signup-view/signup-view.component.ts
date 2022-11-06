import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../model/user';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.css']
})
export class SignupViewComponent implements OnInit {
  @Input() user: User;
  @Output() fireDelete: EventEmitter<User> = new EventEmitter();
  @Output() fireSave: EventEmitter<User> = new EventEmitter();
  public edit: boolean;

  signupForm = this.builder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.pattern('[1-9]\\d{2}[1-9]\\d{6}')],
    email: ['', Validators.email]
  });

  constructor(private authService: AuthenticationService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.edit = true;
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.user);
  }

  save(): void {
    const user = new User(
      this.user.username,
      this.user.password,
      this.user.phone,
      this.user.email);
    this.authService.addUser(user);
    this.user = user;
    this.fireSave.emit(this.user);
  }
}
