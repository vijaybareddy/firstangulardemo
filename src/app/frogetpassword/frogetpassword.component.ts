import { Component } from '@angular/core';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-frogetpassword',
  templateUrl: './frogetpassword.component.html',
  styleUrl: './frogetpassword.component.css'
})
export class FrogetpasswordComponent {

  

  constructor(private UserRegisterService: UserregisterService,){
  }



  userDetails={

    name: '',
    email:'',
    address:'',
    mobile:'',
    age:'',
    gender:''


  };
  register(form:any): void{


    var response= this.UserRegisterService.saveUser(this.userDetails)
    response.subscribe((response: any)=>{
      console.log("From Subscriber of observable"+JSON.stringify(response))

    },(error: any)  => {
      console.log(" saved error "+JSON.stringify(error));
    });



    console.log("registration is inprogress"+JSON.stringify(this.userDetails));
  }
}
