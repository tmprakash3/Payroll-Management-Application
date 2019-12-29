import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';
import { PaySlipsComponent } from './pay-slips/pay-slips.component';
import { PayrollService } from './payroll.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EmpSalaryComponent, PaySlipsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PayrollRoutingModule
  ],
  providers: [
    PayrollService
  ]
})
export class PayrollModule { }
