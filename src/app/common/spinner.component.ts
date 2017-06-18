import { Component } from '@angular/core';
import { NgMediatorService } from "app/common/services/NgMediator.service";

@Component({
    selector: 'spinner',
    template: `<span *ngIf="show">Loading...</span>`
})

export class SpinnerComponent {
    show = false;

    constructor(private mediator: NgMediatorService) {
        mediator.subscribe('show_spinner', () => {
            this.show = true;
        })

        mediator.subscribe('hide_spinner', () => {
            this.show = false;
        })
    }
}