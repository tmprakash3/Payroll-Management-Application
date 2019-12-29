import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {

  ngAfterViewInit() {
    (document.querySelector('.all-employee-container') as HTMLElement).style.display = 'block';
}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  companyNames:string[] = ['Indus Business Systems', 'TradeLeaves India Pvt Ltd'];

  designations:string[] = ['Fresher','Associate Engineer', 'Senior Associate Engineer', 'UI Developer', 'Java Developer', 'Full Stack Developer', 'UI/UX Engineer', 'Team Lead', 'Team Manager', 'Junior Architect', 'Senior Architect', 'Test Engineer', 'Quality Lead', 'Sr.Test Engineer', 'House Keeping', 'HR Department', 'Administration', 'Frontoffice'];


  constructor() { }

  ngOnInit() {
  }

  submitForm(myform) : void {
    console.log('submitForm called');
    console.log(myform);
  }

}
