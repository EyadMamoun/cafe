import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GenericInputComponent } from '../../shared/components/generic-input/generic-input.component';
import { AuthService } from '../../services/auth/auth.service';
import { UserLogInBody, UserLogInResponse } from '../../types/user.type';
import { ToastrService } from 'ngx-toastr';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    GenericInputComponent,
    RouterLink,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _toastr: ToastrService,
  ) {}

  login() {
    const body: UserLogInBody = {
      email: this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? '',
    };

    this._authService.login(body).subscribe((res: UserLogInResponse) => {
      this._authService.saveToken(res.token);
      this._toastr.success(res.message);
      this._router.navigate(['/home']);
    });
  }
}
