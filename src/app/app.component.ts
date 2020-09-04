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

  primary: { nombre: string; edad: number; grado: string; }[];
  totalPrimary: number;
  highSchool: { nombre: string; edad: number; grado: string; }[];
  totalHighSchool: number;

  constructor(private formBuilder: FormBuilder, private studentsService: StudentsService) {
    this.loadStudents();

    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: '',
      grade: ['', [Validators.required]],
      imageUrl: ''
    });
  }

  loadStudents() {
    this.studentsGetSub = this.studentsService.getStudents().subscribe(
      res => {
        console.log(Object.entries(res));
        
        Object.entries(res).map((p: any) => this.data.push({id: p[0], ...p[1]}));

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
