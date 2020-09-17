import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PeopleService } from '../shared/services/people.service';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild('appForm') child: FormComponent;

  personForm: FormGroup;

  peopleGetSub: Subscription;
  peopleAddSub: Subscription;
  //studentsEditSub: Subscription;

  idEdit: String;

  data = [];

  eldery: { name: string; age: number; enable: boolean; urlImage: string; }[];
  young: { name: string; age: number; enable: boolean; urlImage: string; }[];

  constructor(private formBuilder: FormBuilder, private peopleService: PeopleService) {
    this.personForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: '',
      enable: [true, [Validators.required]],
      urlImage: ''
    });
  }

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople() {
    this.data = [];
    this.eldery = [];
    this.young = [];
    this.peopleGetSub = this.peopleService.getPeople().subscribe(
      res => {
        Object.entries(res).map((p: any) => this.data.push({id: p[0], ...p[1]}));
        
        this.eldery = this.data.filter(el => el.age > 64);

        this.young = this.data.filter(el => el.age < 65);
      },
      err => {
        console.log('ERROR');
      }
    );
  }

  create() {
    this.peopleAddSub = this.peopleService.addPerson(this.personForm.value).subscribe(res => {
      this.loadPeople();
    },
    err => {
      console.log('ERROR');
    });
  }

  openDrawer() {
    this.child.open();
  }

/*
  editDB() {
    this.studentsEditSub = this.studentsService.updateStudent(this.idEdit, this.studentForm.value).subscribe(
      res => {
        this.loadStudents();
      },
      err => {
        console.log('ERROR');
      }
    );
  }

  edit(event) {
    this.idEdit = event.id;
    this.studentForm.patchValue({
      name: event.name,
      age: event.age,
      grade: event.grade,
      urlImage: event.urlImage
    });
  }
*/

  delete() {
    this.loadPeople();
  }

  ngOnDestroy() {
    this.peopleGetSub ? this.peopleGetSub.unsubscribe() : '';
    this.peopleAddSub ? this.peopleAddSub.unsubscribe() : '';
    //this.studentsEditSub ? this.studentsEditSub.unsubscribe() : '';
  }

}