import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weimar',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  
  nameTest: string

  @Input() age: number;
  @Output() clickAge = new EventEmitter();

  user: String = 'Maria';

  constructor() { }

  ngOnInit(): void {
  }

  onClickSave() {
    this.clickAge.emit('Hiciste click');
  }

}
