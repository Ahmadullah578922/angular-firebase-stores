import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { AngularFireAuth} from '@angular/fire/auth';

import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>
  userId: string = ''
  constructor(public afAuth: AngularFireAuth) { 
   this.user =  afAuth.user
  }

  login(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
    // .then(
    //   value => {
    //     console.log('success!', value);
    //     this.router.navigate(['admin'])
    //   }
    // ).catch( err => {
    //   console.log('Something went wrong', err.message);
    //   this.router.navigate(['signup'])
    // })
  }


signup(email: string, password: string){
  return this.afAuth.createUserWithEmailAndPassword(email, password)
  // .then(
  //   value => {
  //     console.log('success!', value);
  //     this.router.navigate(['admin'])
  //   }
  // ).catch( err => {
  //   console.log('Something went wrong', err.message);
  // })
}

 logout(){
  return this.afAuth.signOut()
}
}
