import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { FirstTestComponent } from './application/pages/first-test/first-test.component';
import { SecondTestComponent } from './application/pages/second-test/second-test.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    SecondTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
