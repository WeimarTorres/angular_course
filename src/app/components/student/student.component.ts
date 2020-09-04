import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Output() editEvent = new EventEmitter();

  @Input() id: String;
  @Input() name: String;  
  @Input() age: number;
  @Input() imageUrl: String;

  @Input() inputSideNav: MatSidenav;

  auxGrade: String;
  @Input()
      get grade() {
        return this.auxGrade;
      }
      set grade(grade: String) {
        this.auxGrade = (grade === "P") ? "Primaria" : ((grade === "S") ? "Secundaria" : "Error");
      }

  colorBackground = (this.age < 19) ? "white" : "red";

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.inputSideNav.toggle();
    this.editEvent.emit({
      id: this.id,
      nombre: this.name,
      edad: this.age,
      grade: this.grade,
      imageUrl: this.imageUrl
    });
  }

}