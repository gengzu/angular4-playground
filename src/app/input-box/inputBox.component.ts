import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup  } from '@angular/forms'

@Component({
  selector: 'input-box',
  template: `
    <div>
      <input type="text" [(ngModel)]="internalValue" (blur)="onBlur()" />
      <div *ngIf="form.controls[formControlName].invalid">
        <div *ngIf="form.controls[formControlName].errors.maxlength">
          max length
        </div>
        <div *ngIf="form.controls[formControlName].errors.required">
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
  internalValue: string;
  @Input() form: FormGroup;
  @Input() formControlName: string;
  propagateChange = (_: any) => {};

  onBlur() {
    this.propagateChange(this.internalValue);
  }

  writeValue(obj: any): void {
    console.log('write value', obj, this);
    this.internalValue = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
    console.log('registerOnChange')
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched')
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('setDisabledState')
  }  
}
