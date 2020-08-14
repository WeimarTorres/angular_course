import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { Test2Component } from './components/test2/test2.component';
import { ComponentE1Component } from './components/component-e1/component-e1.component';
import { PersonModule } from './modules/person/person.module';
import { ProductModule } from './modules/product/product.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { TestPipe } from './pipes/test.pipe';
import { ExpoPipe } from './pipes/expo.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    ComponentE1Component,
    TestPipe,
    ExpoPipe,
    PurePipe,
    ImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonModule,
    ProductModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
