import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';

  data = [
    {
      nombre: "juan",
      edad: 13,
      grado: "P"
    },
    {
      nombre: "marco",
      edad: 15,
      grado: "S"
    },
    {
      nombre: "maria",
      edad: 20,
      grado: "P"
    },
    {
      nombre: "marta",
      edad: 22,
      grado: "S"
    },
    {
      nombre: "omar",
      edad: 18,
      grado: "P"
    },
    {
      nombre: "miriam",
      edad: 16,
      grado: "S"
    },
    {
      nombre: "roger",
      edad: 18,
      grado: "P"
    },
    {
      nombre: "julieta",
      edad: 20,
      grado: "S"
    },
    {
      nombre: "eber",
      edad: 22,
      grado: "P"
    },
    {
      nombre: "juana",
      edad: 25,
      grado: "S"
    }
  ];

  totalInscribed = 0;
  allInscribed: boolean;
  primary: { nombre: string; edad: number; grado: string; }[];
  totalPrimary: number;
  highSchool: { nombre: string; edad: number; grado: string; }[];
  totalHighSchool: number;

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

  ngOnInit() {
    this.allInscribed = this.data.filter(el => (el.edad < 19)).length === 0;

    this.primary = this.data.filter(el => el.grado === "P");
    this.totalPrimary = this.primary.length;

    this.highSchool = this.data.filter(el => el.grado === "S");
    this.totalHighSchool = this.highSchool.length;
  }
}
