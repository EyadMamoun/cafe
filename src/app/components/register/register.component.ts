import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GenericInputComponent } from '../../shared/components/generic-input/generic-input.component';
import { passwordsMatch } from '../../../validators/passwordMatch.validator';
import { AuthService } from '../../services/auth/auth.service';
import { UserLogInResponse, UserSignUpBody } from '../../types/user.type';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [GenericInputComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordsMatch },
  );

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _toastr: ToastrService,
  ) {}

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const { confirmPassword, ...payload } = this.registerForm.value;
    const userBody: UserSignUpBody = {
      name: (payload.firstName || '') + ' ' + (payload.lastName || ''),
      email: payload.email ?? '',
      password: payload.password ?? '',
    };
    this._authService.signUp(userBody).subscribe((res: UserLogInResponse) => {
      this._authService.saveToken(res.token);
      this._toastr.success(res.message);
      this._router.navigate(['/home']);
    });
  }
}
