import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DesignationsComponent } from './designations/designations.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';


const routes: Routes = [{
  path: 'employees',
  children: [
    { path: 'all-employees', component: AllEmployeesComponent },
    { path: 'attendance', component: AttendanceComponent },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'designations', component: DesignationsComponent },
    { path: 'holidays', component: HolidaysComponent },
    { path: 'leave-request', component: LeaveRequestComponent },]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class EmployessRoutingModule { }
