import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { EmployeesComponent } from '../employees/employees.component';
import { AllEmployeesComponent } from '../employees/all-employees/all-employees.component';
import { AttendanceComponent } from '../employees/attendance/attendance.component';
import { DepartmentsComponent } from '../employees/departments/departments.component';
import { DesignationsComponent } from '../employees/designations/designations.component';
import { HolidaysComponent } from '../employees/holidays/holidays.component';
import { LeaveRequestComponent } from '../employees/leave-request/leave-request.component';
import { PayrollComponent } from '../payroll/payroll.component';
import { EmpSalaryComponent } from '../payroll/emp-salary/emp-salary.component';
import { PayslipsComponent } from '../payroll/payslips/payslips.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'employee',
    component: EmployeesComponent
  },
  {
    path: 'payroll',
    component: PayrollComponent
  },
      { path: 'employee/all-employees', component: AllEmployeesComponent },
      { path: 'employee/attendance', component: AttendanceComponent },
      { path: 'employee/departments', component: DepartmentsComponent },
      { path: 'employee/designations', component: DesignationsComponent },
      { path: 'employee/holidays', component: HolidaysComponent },
      { path: 'employee/leave-request', component: LeaveRequestComponent },
      { path: 'payroll/salaries', component: EmpSalaryComponent },
      { path: 'payroll/payslips', component: PayslipsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
