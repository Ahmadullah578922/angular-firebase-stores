import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interface/user.interface';
import { UserService} from 'src/app/services/user.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // email: string;
  // password: string;

  errorMessage: string = '';
  constructor(public as: AuthService, public us: UserService,public router: Router) { }

  ngOnInit(){
  }
  signup(form){
  //  this.auth.signup(this.email, this.password);
  //  this.email = this.password = '';
  let data: User = form.value
  this.as.signup(data.email, data.password )
  .then(result => {
    this.errorMessage = '',
    this.us.addNewUser(result.user.uid, data.name, data.address).then(()=>{
      this.router.navigate(['/'])
    })

  })
  .catch(err => {
      
      this.errorMessage = err.message
  })
  }

}
