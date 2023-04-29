import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
