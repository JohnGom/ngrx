import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';
import { ChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';

import { mainReducer } from "./state-management/reducers/main-reducer";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DatePickerModule,
    ChartsModule,
    StoreModule.forRoot({mainReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
