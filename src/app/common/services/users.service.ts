import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UsersService {
    private users: Array<User> = [
        new User(1, 'gengzu', 33),
        new User(2, 'nirel', 35),
        new User(3, 'admin', 0)
    ]

    constructor() {
        new Array(10).fill(0).forEach((value, idx) => this.users.push(new User(idx, `name ${idx}`, idx)));
    }

    getUser(id: number) : User {
        return this.users[id-1];
    }
}

export class User {
    constructor(public id: number, public name: string, public age: number) {}
}

@Injectable()
export class UserResolver implements Resolve<User> {
    constructor(private usersService: UsersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
        const userId = +route.params["id"];

        return this.usersService.getUser(userId);
    }

}