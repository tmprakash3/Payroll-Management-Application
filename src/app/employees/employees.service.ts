import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http : HttpClient) { }

  saveEmployee(employeeDTO: any) :  any {
    return this.http.post<any>('/api/employee/save', employeeDTO);
  }

  getAllEmployee():Observable<any> {
    return this.http.get('/api/employee/getAll');
  }

  deleteEmployee(empID): Observable<any> {
    console.log('deleteEmployee in service');
    console.log(empID);
    return this.http.get<any>('/api/employee/delete'+ '/' + empID.id);
  }
}
