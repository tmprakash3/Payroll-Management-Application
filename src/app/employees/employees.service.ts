import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http : HttpClient) { }

  saveEmployee(employeeDTO) :  any {
    return this.http.post<any>('/api/employee/save', employeeDTO);
  }
}
