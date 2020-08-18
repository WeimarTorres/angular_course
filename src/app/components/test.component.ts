import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-weimar',
  template: `
  <div style="border: 1px solid red;">
    <!--
    <p>Test</p>

    <input type="text" [(ngModel)]="name">
    -->

    <p>Valor var name: {{name}}</p>
    <p>Valor var lastName: {{lastName}}</p>
  </div>
  `
})
export class TestComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //@Input()name:string;

  internediaria: string;

  @Input()
  get name() {
    return this.internediaria;
  }
  set name(name: string) {
    this.internediaria = 'Interceptar inputs: ' + name;
  }

  @Input() lastName:string;

  constructor() { }

  ngOnInit() {
    console.log("On Init", this.internediaria);
  }

  ngOnChanges(changes: SimpleChange) {
    if(changes && changes.lastName && changes.lastName.currentValue) {
      console.log("On Changes", changes.lastName.currentValue);

      const aux = 'Interceptar inputs: ' + changes.lastName.currentValue;
      this.lastName = aux;
    }
  }

  /*
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
  */

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
