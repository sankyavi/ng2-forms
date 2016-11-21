//angular / 3rd party imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { MaterialModule } from '@angular/material';
import { DynamicFormsCoreModule } from '@ng2-dynamic-forms/core';
import { DynamicFormsBootstrapUIModule } from '@ng2-dynamic-forms/ui-bootstrap';


// our app imports
import { AppComponent } from './app.component';
import { FormsComponent, PasswordMatcher } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-form.component';



@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    DynamicFormsComponent,
    ReactiveFormsComponent,
    PasswordMatcher,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
