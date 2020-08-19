import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';

  data = [
    {
      nombre: "juan",
      edad: 13,
      grado: "p"
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

  primary = this.data.filter(el => el.grado === "P");
  totalPrimary = this.primary.length;

  highSchool = this.data.filter(el => el.grado === "S");
  totalHighSchool = this.highSchool.length;
}
