import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employeedash.model';
@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
  formValue!:FormGroup;
  employeemodelobj:EmployeeModel=new EmployeeModel();
  constructor(private formbuilder :FormBuilder , private api:ApiService) { }

  ngOnInit(): void {
this.formValue=this.formbuilder.group({
  firstname:[''],
  lastname:[''],
  email:[''],
  mobile:[''],
  salary:['']
})


  }

  postEmployeeDetails(){
    this.employeemodelobj.firstname=this.formValue.value.firstname;
    this.employeemodelobj.lastname=this.formValue.value.lastname;
    this.employeemodelobj.email=this.formValue.value.email;
    this.employeemodelobj.mobile=this.formValue.value.mobile;
    this.employeemodelobj.salary=this.formValue.value.salary;
    
    this.api.postEmployee(this.employeemodelobj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added Sucessfully");
    }
    // err=>{
    //   alert("Wrong");
    // })
    )
  }

}
