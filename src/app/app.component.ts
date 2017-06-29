import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SomeEntity, INAEntity } from './common/someEntity';
import { NgMediatorService } from "app/common/services/NgMediator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder]
})
export class AppComponent {
  title = 'app';

  constructor(private mediator: NgMediatorService) { }

  showSpinner() {
    this.mediator.publish('show_spinner', {});
  }

  hideSpinner() {
    this.mediator.publish('hide_spinner');
  }
}
