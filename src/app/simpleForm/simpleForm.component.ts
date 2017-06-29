import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { INAEntity, SomeEntity } from "app/common/someEntity";
import { NgMediatorService } from "app/common/services/NgMediator.service";

@Component({
    selector: 'simple-form',
    templateUrl: './simpleForm.html',
    providers: [FormBuilder]
})
export class SimpleFormComponent implements OnInit {
    entity: SomeEntity;
    myForm: FormGroup;

    constructor(private fb: FormBuilder, private mediator: NgMediatorService) {
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


    getItems() {
        console.log('get items');
        return [1, 2, 3];
    }
}