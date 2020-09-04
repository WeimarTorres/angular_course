import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';

  studentsSub = Subscription;

  data = [];

  totalInscribed = 0;
  allInscribed: boolean;
  primary: { nombre: string; edad: number; grado: string; }[];
  totalPrimary: number;
  highSchool: { nombre: string; edad: number; grado: string; }[];
  totalHighSchool: number;

  constructor(private studentsService: StudentsService) { }

  enroll(event) {
    const index = this.data.findIndex(el => el.nombre === event.nombre && el.edad === event.edad);

    this.data.splice(index, 1);

    this.allInscribed = this.data.filter(el => (el.edad < 19)).length === 0;

    this.primary = this.data.filter(el => el.grado === "P");
    this.totalPrimary = this.primary.length;

    this.highSchool = this.data.filter(el => el.grado === "S");
    this.totalHighSchool = this.highSchool.length;

    this.totalInscribed++;
  }

  ngOnInit() {
    this.studentsSub = this.studentsService.getStudents().subscribe(
      res => {
        Object.entries(res).map(p => this.data.push(p[1]));
      },
      err => {
        console.log('ERROR');
      }
    );

    this.allInscribed = this.data.filter(el => (el.edad < 19)).length === 0;

    this.primary = this.data.filter(el => el.grado === "P");
    this.totalPrimary = this.primary.length;

    this.highSchool = this.data.filter(el => el.grado === "S");
    this.totalHighSchool = this.highSchool.length;
  }
}
