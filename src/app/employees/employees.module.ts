import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EmployeesService } from './employees.service';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DesignationsComponent } from './designations/designations.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { EmployessRoutingModule } from './employess-routing.module';
import { TimesheetsComponent } from './timesheets/timesheets.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmployessRoutingModule,
  ],
  declarations: [
    AllEmployeesComponent,
    AttendanceComponent,
    DepartmentsComponent,
    DesignationsComponent,
    HolidaysComponent,
    LeaveRequestComponent,
    TimesheetsComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
