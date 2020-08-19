import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

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
    console.log(this.age < 18, this.age)
  }

}