import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { PeopleService } from '../../../shared/services/people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  @ViewChild('drawer') drawer: MatDrawer;
  
  @Output() createEvent = new EventEmitter();

  isAdd: boolean;

  personForm: FormGroup;
  peopleAddSub: Subscription;

  constructor(private formBuilder: FormBuilder, private peopleService: PeopleService) {
    this.personForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: '',
      enable: [true, [Validators.required]],
      urlImage: ''
    });
  }

  ngOnInit() {
  }

  open(type: boolean) {
    this.isAdd = type;
    this.drawer.toggle();
  }

  create() {
    this.peopleAddSub = this.peopleService.addPerson(this.personForm.value).subscribe(res => {
      this.createEvent.emit();
    },
    err => {
      console.log('ERROR');
    });
  }

  ngOnDestroy() {
    this.peopleAddSub ? this.peopleAddSub.unsubscribe() : '';
  }

  /*
<div class="example-sidenav-content">
    <button type="button" mat-button (click)="drawer.toggle()">
      Crear
    </button>
  </div>

  <div style="border: 1px solid black; background: lightBlue">Primaria</div>
  <div style="border: 1px solid black; background: lightBlue">Total {{totalPrimary}}</div>

  <div *ngFor="let student of primary">
    <div [ngStyle]="{'background': (student.age < 19) ? 'orange' : 'red'}">
      <app-student [inputSideNav]="drawer" [id]="student.id" [name]="student.name" [age]="student.age" [grade]="student.grade" [imageUrl]="student.urlImage" (editEvent)="edit($event)" (deleteEvent)="delete($event)"></app-student>
    </div>
  </div>

  <div style="border: 1px solid black; background: lightBlue">Secundaria</div>
  <div style="border: 1px solid black; background: lightBlue">Total {{totalHighSchool}}</div>

  <div *ngFor="let student of highSchool">
    <div [ngStyle]="{'background': (student.age < 19) ? 'orange' : 'red'}">
      <app-student [inputSideNav]="drawer" [id]="student.id" [name]="student.name" [age]="student.age" [grade]="student.grade" [imageUrl]="student.urlImage" (editEvent)="edit($event)" (deleteEvent)="delete($event)"></app-student>
    </div>
  </div>
  */

}