import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;

  constructor() { }

  ngOnInit() {
  }

  open() {
    this.drawer.toggle();
  }

}