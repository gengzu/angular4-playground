import { FormBuilder, NgForm } from "@angular/forms";
import { Component, ViewChild } from "@angular/core";
import { UsersService, User } from "app/common/services/users.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'users-form',
    templateUrl: './usersForm.component.html',
    providers: [FormBuilder]
})
export class UsersFormComponent {
    currentUser: User;
    currentUserId: number;

    @ViewChild('myForm') myForm: NgForm;

    constructor(private usersService: UsersService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.activatedRoute.data.subscribe((data: { user: User }) => {
            this.myForm && this.myForm.form.markAsPristine();

            this.currentUser = data.user;
        }) 

        this.activatedRoute.params.subscribe(params => {
            this.currentUserId = +params["id"];
        })
    }

    prev() {
        this.router.navigate(['users', this.currentUserId - 1]);
    }

    next() {
        this.router.navigate(['users', this.currentUserId + 1]);
    }
}