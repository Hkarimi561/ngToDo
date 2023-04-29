import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import { TodoListComponent } from './todo-list/todo-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { SigninComponent } from './signin/signin.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.development";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./shared/auth.guard";
import {SecureInnerPagesGuard} from "./shared/secure-inner-pages.guard";


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, SecureInnerPagesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
