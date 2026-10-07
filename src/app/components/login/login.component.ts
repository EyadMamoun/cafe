import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GenericInputComponent } from '../../shared/components/generic-input/generic-input.component';
import { AuthService } from '../../services/auth/auth.service';
import { UserLogInBody, UserLogInResponse } from '../../types/user.type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [GenericInputComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _toastr: ToastrService,
  ) {}

  login() {
    const body: UserLogInBody = {
      email: this.email,
      password: this.password,
    };

    this._authService.login(body).subscribe({
      next: (res: UserLogInResponse) => {
        this._authService.saveToken(res.token);
        this._toastr.success('Welcome Back!');
        this._router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
        this._toastr.error(err.error.err);
      },
    });
  }
}
