import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentsService {

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<any> {
    return this.http.get('https://studentss-test.firebaseio.com/students.json');
  }

  public addStudent(student: any): Observable<any> {
    return this.http.post('https://studentss-test.firebaseio.com/students.json', student);
  }

  public updateStudent(id: any, student: any): Observable<any> {
    return this.http.put(`https://angular-course-ff5dd.firebaseio.com/products/${id}.json`, student);
  }

}