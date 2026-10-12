// [1] IMPORT: Component, Input, Optional, Self
// WHAT: Brings in Angular's building blocks for components and dependency injection.
// WHY: Component makes the class a component, Input lets the parent pass data in,
//      and Self/Optional control how Angular injects NgControl (see label 7).
import { Component, Input, Optional, Self } from '@angular/core';

// [2] IMPORT: ControlValueAccessor, NgControl
// WHAT: ControlValueAccessor is the interface that lets Angular forms talk to a custom
//       component. NgControl is the object that represents the form control attached to it.
// WHY: Without ControlValueAccessor, formControlName would not work on <app-generic-input>,
//      because Angular only knows how to talk to native inputs by default.
import { ControlValueAccessor, NgControl } from '@angular/forms';

// [3] @Component DECORATOR
// WHAT: Registers the class as a component and links its template and styles.
// WHY: The selector 'app-generic-input' is the tag you write in the register template.
@Component({
  selector: 'app-generic-input',
  imports: [],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.scss',
})
// [4] implements ControlValueAccessor
// WHAT: Promises Angular that this class has the 4 methods forms need (labels 9 to 12).
// WHY: TypeScript will warn you if you forget one, so the contract can't be broken by accident.
export class GenericInputComponent implements ControlValueAccessor {
  // [5] @Input() label and inputType
  // WHAT: Settings the parent passes in: the text above the input and its type.
  // WHY: One component can then serve every field (text, email, password) without duplicating code.
  //      We removed the old @Input() value and @Output() valueChange because the form now
  //      owns the value, and keeping both would give you two sources of truth.
  @Input() label: string = '';
  @Input() inputType: 'text' | 'number' | 'email' | 'password' = 'text';

  // [6] value and disabled (internal state)
  // WHAT: value is what the input currently displays. disabled says whether it is locked.
  // WHY: These are NOT @Input because the form controls them (via writeValue and
  //      setDisabledState). The component only keeps a copy so the template can show it.
  value: string = '';
  disabled = false;

  // [7] onChange and onTouched (placeholder callbacks)
  // WHAT: Variables that will later hold Angular's functions. Calling onChange tells the
  //       form "the value changed", and calling onTouched tells it "the user left the field".
  // WHY: They start as empty functions () => {} so nothing crashes if the component calls them
  //      before Angular has registered the real ones. They are private because only this
  //      component should call them.
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  // [8] constructor with NgControl
  // WHAT: Asks Angular for the form control attached to this element, then tells it
  //       "I am your value accessor".
  // WHY: Injecting NgControl gives us access to errors, invalid and touched, which is how the
  //      component shows validation messages itself. We set valueAccessor manually instead of
  //      using the NG_VALUE_ACCESSOR provider, because using both causes a circular dependency.
  //      @Self() means "look only on this element". @Optional() means "don't crash if there is no
  //      form control", for example when someone uses the component without a form.
  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  // [9] writeValue (form → component)
  // WHAT: Angular calls this when the form changes the value: initial value, setValue(),
  //       patchValue(), reset().
  // WHY: This is how the input stays in sync when the change comes from code, not from typing.
  //      "?? ''" turns null or undefined (reset() sends null) into an empty string so the input
  //      doesn't display the word "null".
  writeValue(value: string): void {
    this.value = value ?? '';
  }

  // [10] registerOnChange
  // WHAT: Angular hands us a function; we store it in onChange.
  // WHY: Angular decides how to update the form, and we just call the function it gave us.
  //      This keeps our component independent of the form's internals.
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // [11] registerOnTouched
  // WHAT: Same idea as label 10, but for the "touched" notification.
  // WHY: The form needs to know when the user has visited a field so that the "touched" state
  //      works. Error messages depend on it (see showError, label 15).
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // [12] setDisabledState
  // WHAT: Angular calls this when the control is disabled or enabled with control.disable() or enable().
  // WHY: Without it, disabling the control in code would not disable the visible input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // [13] onInput (component → form)
  // WHAT: Runs on every keystroke. Reads the typed text, saves it, and tells the form.
  // WHY: Native inputs report changes to the form automatically, but our wrapper must do it by
  //      hand by calling onChange. Without this call, the form value would always stay empty.
  onInput(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChange(newValue);
  }

  // [14] onBlur
  // WHAT: Runs when the user leaves the field and calls onTouched.
  // WHY: Marks the control as "touched", so errors show only after the user has interacted with
  //      the field, not the moment the page loads.
  onBlur() {
    this.onTouched();
  }

  // [15] showError (getter)
  // WHAT: Returns true only when the control is invalid AND touched.
  // WHY: Without the touched check, every empty required field would be red as soon as the page
  //      opens. A getter is used so the template can write "showError" and it is always
  //      recalculated with the latest state. "!!" converts the value to a strict true/false
  //      and handles the case where ngControl is null.
  get showError(): boolean {
    return !!this.ngControl?.invalid && !!this.ngControl?.touched;
  }
}
