import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  Validators,
  ReactiveFormsModule,
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
} from '@angular/forms';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-children-cva',
  templateUrl: './children-cva.component.html',
  styleUrls: ['./children-cva.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildrenCvaComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => ChildrenCvaComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildrenCvaComponent
  implements ControlValueAccessor, OnInit, Validator
{
  private _cdr = inject(ChangeDetectorRef);

  private _value: string = '';

  control = new FormControl(undefined, [Validators.required]);

  get value() {
    return this._value;
  }

  set value(v: string) {
    this._value = v;
    this.onChange(v);
    this.onTouched();
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe({
      next: (v) => {
        console.log('child', v, this.control.errors);

        this.value = v || '';
      },
    });
  }

  set(v: string) {
    console.log('set', v);
    this.value = v;
  }

  writeValue(value: any): void {
    console.log('write value', value);

    this.value = value;
  }

  onChange: (val: string) => void = () => {};

  onTouched: () => void = () => {};

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = (val) => {
      fn(val);
      this._cdr.markForCheck();
    };
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = () => {
      fn();
      this._cdr.markForCheck();
    };
  }

  validate(_: AbstractControl): ValidationErrors | null {
    const error = { invalid: true };

    if (this.control.invalid) {
      return error;
    }
    return null;
  }
}
