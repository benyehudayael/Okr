import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objective } from '../model/objective';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getObjectives(date: any, departmentId: string): Observable<Objective[]> {
    return this.http.get<Objective[]>('https://localhost:7071/api/objective', {
      params: {
        date: new Date(date.year, date.month - 1, date.day).toDateString(),
        departmentId: departmentId
      }
    });
  }
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('https://localhost:7071/api/person');
  }
  addNewObjective(objective: Objective): Observable<any> {
    return this.http.post<any>('https://localhost:7071/api/objective', objective);
  }
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('https://localhost:7071/api/department');
  }
}
