import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentsService } from './services/students.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'curso-angular';

  studentForm: FormGroup;

  studentsGetSub: Subscription;

  data = [];

  totalInscribed = 0;
  allInscribed: boolean;
  primary: { nombre: string; edad: number; grado: string; }[];
  totalPrimary: number;
  highSchool: { nombre: string; edad: number; grado: string; }[];
  totalHighSchool: number;

  constructor(private formBuilder: FormBuilder, private studentsService: StudentsService) {
    this.loadStudents();

    this.studentForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });
  }

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

  loadStudents() {
    this.studentsGetSub = this.studentsService.getStudents().subscribe(
      res => {
        console.log(Object.entries(res));
        
        Object.entries(res).map((p: any) => this.data.push({id: p[0], ...p[1]}));
        this.allInscribed = this.data.filter(el => (el.age < 19)).length === 0;

        this.primary = this.data.filter(el => el.grade === "P");
        this.totalPrimary = this.primary.length;

        this.highSchool = this.data.filter(el => el.grade === "S");
        this.totalHighSchool = this.highSchool.length;
      },
      err => {
        console.log('ERROR');
      }
    );
  }

  ngOnDestroy() {
    this.studentsGetSub ? this.studentsGetSub.unsubscribe() : '';
  }
}
