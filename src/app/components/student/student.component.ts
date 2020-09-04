import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StudentsService } from '../../services/students.service';

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
        return (this.auxGrade === "Primaria") ? "P" : ((this.auxGrade === "Secundaria") ? "S" : "Error");
      }
      set grade(grade: String) {
        this.auxGrade = (grade === "P") ? "Primaria" : ((grade === "S") ? "Secundaria" : "Error");
      }

  colorBackground = (this.age < 19) ? "white" : "red";

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
  }

  edit() {
    this.inputSideNav.toggle();
    this.editEvent.emit({
      id: this.id,
      name: this.name,
      age: this.age,
      grade: this.grade,
      urlImage: this.imageUrl
    });
  }

  delete() {
    this.studentsService.deleteStudent(this.id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
      },
      err => {
        console.log('ERROR');
      }
    );
  }

}