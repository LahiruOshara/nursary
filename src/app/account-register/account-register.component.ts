import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthenticationService } from '../services/authentication.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})

export class AccountRegisterComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private validateService: ValidateService, 
    private flashMessages:FlashMessagesService,
    private authetication:AuthenticationService,
    private router:Router
    ) { }
  ngOnInit() {
  }

  onRegSubmit(){
    const user={
      name:this.name,
      username:this.username,
      email:this.email,
      password:this.password
    }
    //console.log('form submit button pressed');
    //validate user
    if(!this.validateService.validateUser(user)){
      //console.log('fill the fields');
      this.flashMessages.show("Fill in all the fields",{cssClass:'alert-danger',timeout:30000});
      return false;
    }
    //validate email
    if(!this.validateService.validateEmail(this.email)){
      //console.log("invalid email");
      this.flashMessages.show("Invalid email",{cssClass:'alert-danger',timeout:30000});
      return false;
    }
/*
    //Register the user
    this.authetication.registerUser(user).subscribe(data=>{
      if(data.success){
        this.flashMessages.show("Registerd",{cssClass:'alert-success',timeout:30000});
        //this.router.navigate(['/login']);
      }else{
        this.flashMessages.show("Something went wrong",{cssClass:'alert-danger',timeout:30000});
        //this.router.navigate(['/accountRegister']);
      }
    });*/
  }


}