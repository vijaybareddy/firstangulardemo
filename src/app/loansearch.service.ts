import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './model/Account';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private httpClient:HttpClient) {

   }
   searchAccount(accountnumber:any):Observable<any>{
   const httpHeaders = {
      headers: new HttpHeaders({
        'accountnumber':accountnumber,
        'Content-Type':  'application/json',  //indicate the media type of the class, it give data of the body(giving)
        'Accept': 'application/json'//expected 
        
      })
      
    };
    console.log('service'+JSON.stringify(accountnumber));
    return this.httpClient.get("http://localhost:8080/api/searchAccount",httpHeaders);
   }
}
