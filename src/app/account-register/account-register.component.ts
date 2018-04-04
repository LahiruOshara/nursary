import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})

export class AccountRegisterComponent implements OnInit {

  name: String;
  username:String;
  email:String;
  password:String;

  constructor(private validateService:ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }
    console.log("Submit button pressed");

    //
    if(!this.validateService.validateRegister(user)){
      console.log('fill in all fields');
    }

    if(!this.validateService.validateEmail(this.email)){
      console.log('enter valid email');
    }
  }

}
