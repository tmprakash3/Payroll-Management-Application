import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {
  firstName: String;
  lastName: String;
  userName: any;
  emailId: any;
  password: any;
  confirmPassword: any;
  employeeId: any;
  joiningDate: any;
  companyName: String;
  designation: String;
  phoneNumber: number;
  EmployeesService: any;

  employees = [];

  ngAfterViewInit() {
    (document.querySelector('.all-employee-container') as HTMLElement).style.display = 'block';
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  companyNames: string[] = ['Indus Business Systems', 'TradeLeaves India Pvt Ltd'];

  designations: string[] = ['Fresher', 'Associate Engineer', 'Senior Associate Engineer', 'UI Developer', 'Java Developer', 'Full Stack Developer', 'UI/UX Engineer', 'Team Lead', 'Team Manager', 'Junior Architect', 'Senior Architect', 'Test Engineer', 'Quality Lead', 'Sr.Test Engineer', 'House Keeping', 'HR Department', 'Administration', 'Frontoffice'];


  constructor(private EmpService: EmployeesService) { }

  ngOnInit() {
    this.EmpService.getAllEmployee().subscribe((data: any[]) => {
      this.employees = data;
      console.log("fetching employees data::")
      console.log(data);
    });
  }

  submitForm(myform): void {
    console.log('submitForm called');
    if (myform.$invalid) {
      return;
    }
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.userName);
    console.log(this.emailId);
    console.log(this.password);
    console.log(this.confirmPassword);
    console.log(this.employeeId);
    console.log(this.joiningDate);
    console.log(this.companyName);
    console.log(this.designation);
    console.log(this.phoneNumber);
    let employeeDTO: any = {};
    employeeDTO.firstName = this.firstName;
    employeeDTO.lastName = this.lastName;
    employeeDTO.userName = this.userName;
    employeeDTO.emailId = this.emailId;
    employeeDTO.password = this.password;
    employeeDTO.confirmPassword = this.confirmPassword;
    employeeDTO.employeeId = this.employeeId;
    employeeDTO.joiningDate = this.joiningDate;
    employeeDTO.companyName = this.companyName;
    employeeDTO.designation = this.designation;
    employeeDTO.phoneNumber = this.phoneNumber;
    this.EmpService.saveEmployee(employeeDTO).subscribe(response => {
      console.log('response from saveEmployee');
      console.log(response);
      if (response.savedObj == "EMAILID_ALREADY_EXISTS") {
        console.log('Email already exists');
      } else {
        console.log('need to call get employess method');
      }
    })

  }

}
