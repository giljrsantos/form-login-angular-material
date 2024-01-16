import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  //formLoginSistema: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {

    // this.formLoginSistema = this.fb.group({
    //   username: [''],
    //   password: []
    // })

  }

  username: string = '';
  password: string = '';
  UserPassInvalid: boolean = false;

  ngOnInit() {

  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['dashboard']);
    } else {
      this.UserPassInvalid = true;
    }
  }
}
