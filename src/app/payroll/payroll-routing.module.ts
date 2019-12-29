import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';
import { PaySlipsComponent } from './pay-slips/pay-slips.component';


const routes: Routes = [{
  path: 'payroll',
  children: [
    { path: 'salaries', component: EmpSalaryComponent },
    { path: 'payslips', component: PaySlipsComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
