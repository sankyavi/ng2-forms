import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponentvalid } from './app.component';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, CustomFormsModule],
  declarations: [AppComponentvalid],
  bootstrap: [AppComponentvalid]
})
export class AppModule5 {
}