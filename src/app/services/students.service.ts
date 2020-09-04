import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentsService {

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<any> {
    return this.http.get('https://studentss-test.firebaseio.com/students.json');
  }

}