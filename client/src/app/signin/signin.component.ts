import { Component, OnInit } from '@angular/core';
import { InputConfigWithPrefix } from '../shared/forms/config/input/input-config-with-prefix';
import { InputConfig } from '../shared/forms/models/input/input-config';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  faGoogle = faGoogle;
  emailConfig: InputConfig = InputConfigWithPrefix('Email Address', 'text', 'Enter Email', 'user');
  passwordConfig: InputConfig = InputConfigWithPrefix('Password', 'password', '••••••••', 'lock');
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {

  }
}
