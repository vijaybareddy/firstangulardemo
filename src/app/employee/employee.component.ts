import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
student: any;
constructor(private http: HttpClient) { }

ngOnInit(): void {
  this.http.get("http://localhost:8080/getStuList")
    .subscribe((data) => {
      console.log(data); // Log the data to the console
      this.student = data;
    }, error => {
      console.error('There was an error!', error);
    });
}
}
