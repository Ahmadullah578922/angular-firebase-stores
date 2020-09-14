import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public fs: AngularFirestore, public as: AuthService) { }

  addNewUser(id, name, address){
    return this.fs.doc('users/' + id).set({
      name,
      address
    })
  }

  getUserData() {
    return this.fs.doc('users/' + this.as.userId).valueChanges()
  }
}
