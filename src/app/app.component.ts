import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SomeEntity, INAEntity } from './common/someEntity';

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
    this.entity = new SomeEntity();
    this.entity.name = {
      value: 'gengzu',
      isNA: false
    }
    this.entity.age = {
      value: 34,
      isNA: false
    }
  }

   ngOnInit(): void {
    this.myForm = this.fb.group({
      'someName': new FormControl('', [this.validateRequired]),
      'someAge': new FormControl('', [this.validateNumber, this.validateRequired])
    })
  }

  validateRequired(c: FormControl) {
    var entity = <INAEntity>c.value 
    
    return entity.value || entity.isNA
      ? null
      : { validateRequired: { valid: false } };
  }

  validateNumber(c: FormControl) {
    var entity = <INAEntity>c.value 

    return !parseInt(entity.value) && !entity.isNA      
      ? { validateNumber: { valid: false } }
      : null;
  }
}
