import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * Form
  */
  formLogin: FormGroup;

  constructor(private _fb: FormBuilder, private _authService: AuthService) {
    this.formLogin = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  /**
   * Signin
   */
  submitForm() {
    if (this.formLogin.invalid) {
      return;
    }
    this._authService.login(this.formLogin.value)
      .subscribe(resp => {
        console.log(resp)
      });
  }
}
