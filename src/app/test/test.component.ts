import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-weimar',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnChanges, OnInit {
  
  nameTest: string

  @Input() age: number;
  @Output() clickAge = new EventEmitter();

  user: String = 'Maria';

  constructor() { }

  ngOnChanges(): void {
    console.log('On changes');
  }

  ngOnInit(): void {
    console.log('On init');
  }

  onClickSave() {
    this.clickAge.emit('Hiciste click');
  }

}
