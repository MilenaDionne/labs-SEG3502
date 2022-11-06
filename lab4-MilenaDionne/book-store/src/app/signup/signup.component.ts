import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {User} from './model/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm = this.builder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.pattern('[1-9]\\d{2}[1-9]\\d{6}')],
    email: ['', Validators.email]
  });
  selectedUser: User;

  get username(): AbstractControl {return this.registerForm.get('username'); }
  get password(): AbstractControl {return this.registerForm.get('password'); }

  // tslint:disable-next-line:max-line-length
  constructor(private builder: FormBuilder, private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const user = new User(
      this.registerForm.value.username,
      this.registerForm.value.password,
      this.registerForm.value.phone,
      this.registerForm.value.email);
    this.authService.addUser(user);
    this.registerForm.reset();
    this.selectedUser = user;
    }
}
