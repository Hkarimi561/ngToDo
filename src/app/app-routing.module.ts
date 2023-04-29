import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {SigninComponent} from "./signin/signin.component";
import {SecureInnerPagesGuard} from "./shared/secure-inner-pages.guard";
import {AuthGuard} from "./shared/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    component: SigninComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  {
    path: 'todos',
    component: TodoListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
