import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { Test2Component } from './components/test2/test2.component';
import { ComponentE1Component } from './components/component-e1/component-e1.component';
import { PersonModule } from './modules/person/person.module';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    ComponentE1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
