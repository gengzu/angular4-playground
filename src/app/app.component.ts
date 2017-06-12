import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SomeEntity } from './common/someEntity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FormBuilder ]
})
export class AppComponent implements OnInit {
  title = 'app';
  
  entity: SomeEntity;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.entity = new SomeEntity("gengzu", 34);
  }

   ngOnInit(): void {
    this.myForm = this.fb.group({
      'someName': new FormControl('', [Validators.required]),
      'someAge': new FormControl('', [Validators.maxLength(3)])
    })
  }
}
