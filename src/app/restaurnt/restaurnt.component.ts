import { Component } from '@angular/core';
import { Restaurant } from '../model/Restaurent';
import { Address } from '../model/Address';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-restaurnt',
  templateUrl: './restaurnt.component.html',
  styleUrl: './restaurnt.component.css'
})
export class RestaurntComponent {
 
  restaurant= new Restaurant('',new Address('','','','','',),new Rating(0,''));


  addrestaurant():void{
    console.log("From Restaurant"+JSON.stringify(this.restaurant))
  }
}
