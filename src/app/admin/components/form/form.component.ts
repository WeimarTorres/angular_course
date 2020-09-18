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
  
  @Output() event = new EventEmitter();
  personEditSub: Subscription;

  isAdd: boolean;

  idEdit: String;

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
      this.event.emit();
    },
    err => {
      console.log('ERROR');
    });
  }

  ngOnDestroy() {
    this.peopleAddSub ? this.peopleAddSub.unsubscribe() : '';
    this.personEditSub ? this.personEditSub.unsubscribe() : '';
  }

  edit(event) {
    this.idEdit = event.id;
    this.personForm.patchValue({
      name: event.name,
      age: event.age,
      grade: event.grade,
      urlImage: event.urlImage
    });
  }

  editDB() {
    this.personEditSub = this.peopleService.updatePerson(this.idEdit, this.personForm.value).subscribe(
      res => {
        this.event.emit();
      },
      err => {
        console.log('ERROR');
      }
    );
  }

}