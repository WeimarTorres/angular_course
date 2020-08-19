import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Output() enrollEvent = new EventEmitter();

  @Input() name: String;  
  @Input() age: number;

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

  enroll() {
    this.enrollEvent.emit({
      nombre: this.name,
      edad: this.age
    });
  }

}