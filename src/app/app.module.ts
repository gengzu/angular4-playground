import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/inputBox.component';
import { NgMediatorService } from "app/common/services/NgMediator.service";
import { SpinnerComponent } from "app/common/spinner.component";

import { SimpleFormComponent } from "app/simpleForm/simpleForm.component";
import { UsersFormComponent } from "app/usersForm/usersForm.component";
import { UsersService, UserResolver } from "app/common/services/users.service";

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    SpinnerComponent,
    SimpleFormComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SimpleFormComponent
      },
      {
        path: 'users/:id',
        component: UsersFormComponent,
        resolve: {
          user: UserResolver
        }
      },
      {
        path: 'users',
        pathMatch: 'full',
        redirectTo: 'users/1'
      }
    ]),
  ],
  providers: [NgMediatorService, UsersService, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
