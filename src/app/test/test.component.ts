import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-weimar',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log("On Init");
  }

  ngOnChanges() {
    console.log("On Changes");
  }

  ngDoCheck() {
    console.log("Do Check");
  }

  ngAfterContentInit() {
    console.log("After Content Init");
  }

  ngAfterContentChecked() {
    console.log("After Content Checked");
  }

  ngAfterViewInit() {
    console.log("After View Init");
  }

  ngAfterViewChecked() {
    console.log("After View Checked");
  }

  ngOnDestroy() {
    console.log("On Destroy");
  }

  /*
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
  */

}
