import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-e1',
  templateUrl: './component-e1.component.html',
  styleUrls: ['./component-e1.component.scss']
})
export class ComponentE1Component implements OnInit {

  @Input() name: String;
  @Input() age: number;
  @Input() description: String;

  @Output() clickSave = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickSave() {
    this.clickSave.emit({
      name: this.name,
      age: this.age,
      description: this.description
    })
  }

}
