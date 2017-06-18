import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/inputBox.component';
import { NgMediatorService } from "app/common/services/NgMediator.service";
import { SpinnerComponent } from "app/common/spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NgMediatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
