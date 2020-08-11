import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'person',
  template: `
  <div style="display: flex; flex-direction: column; border: 1px solid red;">
    <span>Name: {{name}}</span>
    <span>Last Name: {{lastName}}</span>
    <span>Age: {{age}}</span>
    <span>Enable: {{enable}}</span>
  </div>
  `,
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() name: String;
  @Input() lastName: String;
  @Input() age: number;
  @Input() enable: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
