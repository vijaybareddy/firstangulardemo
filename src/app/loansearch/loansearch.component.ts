import { Component } from '@angular/core';
import { LoansearchService } from '../loansearch.service';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent  {

  accountnumber:string='';
  constructor(private loanserachchservice:LoansearchService){

  }
  searchaccount(){
    console.log("loan component"+JSON.stringify(this.accountnumber));
    this.loanserachchservice.searchAccount(this.accountnumber).subscribe(
    data=>{
      console.log(JSON.stringify(data));
    }
  )

    }
  }
