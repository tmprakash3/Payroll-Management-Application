import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PayrollComponent } from './payroll/payroll.component';
import { AllEmployeesComponent } from './employees/all-employees/all-employees.component'
import { HolidaysComponent } from './employees/holidays/holidays.component';
import { LeaveRequestComponent } from './employees/leave-request/leave-request.component';
import { AttendanceComponent } from './employees/attendance/attendance.component';
import { DepartmentsComponent } from './employees/departments/departments.component';
import { DesignationsComponent } from './employees/designations/designations.component';
import { EmpSalaryComponent } from './payroll/emp-salary/emp-salary.component';
import { PayslipsComponent } from './payroll/payslips/payslips.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmployeesComponent,
    PayrollComponent,
    AllEmployeesComponent,
    HolidaysComponent,
    LeaveRequestComponent,
    AttendanceComponent,
    DepartmentsComponent,
    DesignationsComponent,
    EmpSalaryComponent,
    PayslipsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AuthModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: CatchErrorInterceptor,
    multi: true,
  }],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
