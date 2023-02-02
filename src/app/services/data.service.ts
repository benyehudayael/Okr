import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objective } from '../model/objective';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getObjectives(): Observable<Objective[]> {
    return this.http.get<Objective[]>('https://localhost:7071/api/objective');
  }
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('https://localhost:7071/api/person');
  }
}
