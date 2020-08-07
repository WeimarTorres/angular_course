import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { ComponentE1Component } from './component-e1/component-e1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    ComponentE1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
