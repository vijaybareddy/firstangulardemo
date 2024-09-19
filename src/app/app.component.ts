import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserregisterService } from './userregister.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
accountLookup() {
throw new Error('Method not implemented.');
}
addRestaurant() {
throw new Error('Method not implemented.');
}
searchLoan() {
throw new Error('Method not implemented.');
}
withdraw() {
throw new Error('Method not implemented.');      
}
  title = 'firstangulardemo';

  fullNameFromChild:string='';

  constructor(private router: Router,
    private userregisterservice:UserregisterService
  ) { 
    this.userregisterservice.userNameBehaviorSubject.subscribe(
      data=> {
        this.fullNameFromChild=data;
        console.log(" from app-component subscribe ");
      }
    )


  }

  register() {
    this.router.navigate(['/register']);
    console.log("Navigating to register");
  }

  forgetpassword() {
    this.router.navigate(['/forgetpassword']);
    console.log("Navigating to forget-password");
  }
  employee(){
    this.router.navigate(['/employee']);
    console.log("Navigating to Employee");
  }
  createaccount(){
    this.router.navigate(['/createaccount']);
    
  }
  createatm(){
    this.router.navigate(['/createatm']);
    
  }
  login() {
    this.router.navigate(['/login']);
    console.log("Navigating to login");
  }
}