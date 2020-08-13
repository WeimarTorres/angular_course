import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './module/person/components/person/person.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersonComponent
  ],
  exports: [
    PersonComponent
  ]
})
export class PersonModule { }