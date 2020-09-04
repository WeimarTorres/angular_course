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
  studentsAddSub: Subscription;
  studentsEditSub: Subscription;

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
        Object.entries(res).map((p: any) => this.data.push({id: p[0], ...p[1]}));

        console.log(this.data);
        
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

  create() {
    this.studentsAddSub = this.studentsService.addStudent(this.studentForm.value).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log('ERROR');
    });
    this.loadStudents;
  }

  editDB() {
    /*this.studentsEditSub = this.studentsService.updateStudent(this.idEdit, this.productForm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );*/
  }

  edit(event) {
    console.log(event);
    this.studentForm.patchValue({
      name: event.name,
      age: event.age,
      grade: event.grade,
      imageUrl: event.imageUrl
    });
  }

  ngOnDestroy() {
    this.studentsGetSub ? this.studentsGetSub.unsubscribe() : '';
  }
}
