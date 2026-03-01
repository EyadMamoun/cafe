import { Component } from '@angular/core';
import { GenericInputComponent } from '../../shared/components/generic-input/generic-input.component';

@Component({
  selector: 'app-login',
  imports: [GenericInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
