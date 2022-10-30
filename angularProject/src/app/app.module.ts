import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';

@NgModule({
  declarations: [
    AppComponent,
    Module1Component,
    Module2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
