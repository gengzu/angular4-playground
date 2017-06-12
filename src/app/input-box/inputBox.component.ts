import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup  } from '@angular/forms'

import { INAEntity } from '../common/someEntity'

@Component({
  selector: 'input-box',
  template: `
    <div>
      <input type="text" [(ngModel)]="title" (blur)="onBlur()" />
      <div *ngIf="form.controls[formControlName].invalid">
        <div *ngIf="form.controls[formControlName].errors.validateNumber">
          number
        </div>
        <div *ngIf="form.controls[formControlName].errors.validateRequired">
          required
        </div>
      </div>
    </div>
    `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBoxComponent),
      multi: true
    }
  ]
})

export class InputBoxComponent implements ControlValueAccessor {
  internalValue: INAEntity;
  title: string;
  @Input() form: FormGroup;
  @Input() formControlName: string;
  propagateChange = (_: any) => {};

  onBlur() {
    this.internalValue.value = this.title;
    this.internalValue.isNA = this.title == 'NA';
    this.propagateChange(this.internalValue);
  }

  writeValue(obj: any): void {
    console.log('write value', obj, this);
    this.internalValue = obj;
    this.title = this.internalValue.value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
    //console.log('registerOnChange')
  }

  registerOnTouched(fn: any): void {
    //console.log('registerOnTouched')
  }

  setDisabledState(isDisabled: boolean): void {
    //console.log('setDisabledState')
  }  
}
