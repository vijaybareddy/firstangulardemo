import { Component } from '@angular/core';
import { OtpServiceService } from '../otp-service.service';

@Component({
  selector: 'app-otp-from',
  templateUrl: './otp-from.component.html',
  styleUrl: './otp-from.component.css'
})
export class OtpFromComponent {
  constructor(private OtpService: OtpServiceService){

  }



  otpDetails={
    mobileNo:'',
    otpNo:''
  }

  register(form:any): void{
    var response= this.OtpService.forOtp(this.otpDetails)
    response.subscribe(response=>{
      console.log("From Subscriber of observable"+JSON.stringify(response))

    },error  => {
      console.log(" saved error "+JSON.stringify(error));
    });



    console.log("registration is inprogress"+JSON.stringify(this.otpDetails));


  }



}
