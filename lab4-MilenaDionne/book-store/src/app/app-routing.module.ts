import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BooksComponent} from './books/books.component';
import {BookComponent} from './books/book/book.component';
import {AllBooksComponent} from './all-books/all-books.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {LoggedInGuard} from './logged-in.guard';
import {SignupComponent} from './signup/signup.component';
import {UserComponent} from './signup/user/user.component';


const booksRoutes: Routes = [
  {path: ':id', component: BookComponent}
];

const usersRoutes: Routes = [
  {path: 'user', component: UserComponent}
];

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [LoggedInGuard]},
  {path: 'books', component: BooksComponent, children: booksRoutes},
  {path: 'all-books', component: AllBooksComponent, children: booksRoutes},
  {path: 'signup', component: SignupComponent, children: usersRoutes},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
