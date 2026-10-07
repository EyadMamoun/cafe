import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-coffee-spinner',
  imports: [AsyncPipe],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class CoffeeSpinnerComponent {
  constructor(public loading: LoadingService) {}
}
