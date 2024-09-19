import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Address } from '../model/Address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  address={
    add1:'',
    add2:'',
    pincode:'',
    state:'',
    city:''
  }

}