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


  constructor() { }

  ngOnInit() {
  }

  submitForm(myform) : void {
    console.log('submitForm called');
    console.log(myform);
  }

}
