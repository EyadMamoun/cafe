import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-input',
  imports: [],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.scss',
})
export class GenericInputComponent {
  @Input() label: string = '';
  @Input() inputType: 'text' | 'number' | 'email' | 'password' = 'text';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
