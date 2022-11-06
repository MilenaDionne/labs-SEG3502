import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction, DocumentReference} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserDbService {

  constructor(private firestore: AngularFirestore) { }

  getUser(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: User): Promise<DocumentReference> {
    delete user.id;
    return this.firestore.collection('users').add({...user});
  }

  updateUser(user: User): Promise<void> {
    const userId = user.id;
    delete user.id;
    return this.firestore.collection('users').doc(userId).update(user);
  }

  deleteUser(userId: string): Promise<void> {
    return this.firestore.collection('users').doc(userId).delete();
  }
}
