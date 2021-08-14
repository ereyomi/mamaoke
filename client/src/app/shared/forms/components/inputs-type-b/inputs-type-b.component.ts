import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputConfig } from '../../models/input/input-config';

@Component({
  selector: 'app-inputs-type-b',
  templateUrl: './inputs-type-b.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsTypeBComponent),
      multi: true,
    },
  ],
})
export class InputsTypeBComponent implements OnInit, ControlValueAccessor {


  @Input() config!: InputConfig;
  @Input() class!: string;
  @Input() type!: string;

  onChange!: (_: any) => void;
  onTouched!: () => void;
  value: any;
  componentFormGroup = this.fb.group({
    input: this.fb.control(null),
  });
  constructor(private fb: FormBuilder) { }
  writeValue(obj: any): void {
    this.value = obj;
    this.componentFormGroup.setValue({ input: obj });
    this.componentFormGroup.updateValueAndValidity();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.componentFormGroup.disable({ emitEvent: true });
    } else {
      this.componentFormGroup.enable({ emitEvent: true });
    }
  }

  getFieldValue(): any {
    const field = this.componentFormGroup.get('input');
    return field ? field.value : null;
  }
  ngOnInit(): void {
    this.componentFormGroup.valueChanges.subscribe((vals) => {
      if (this.onChange) {
        this.onChange(this.getFieldValue());
      }
    });
    if (this.isDisable) {
      this.componentFormGroup.disable();
    }
  }

  get isDisable(): boolean {
    return this.config?.formStatus?.isDisabled || false;
  }

  increment(event: any): void {
    event.stopPropagation();
    const max = 99;
    const min = 0;
    const step = 1;
    let val = this.getFieldValue();
    val = val !== null && val !== undefined && val !== ''
      ? parseInt(val, 10)
      : min ? min : 0;
    const newV = val + step;
    if (val !== null && newV >= max) {
      this.writeValue(max ? max : newV);
    } else {
      this.writeValue(newV);
    }
  }
  decrement(event: any): void {
    event.stopPropagation();
    const min = 0;
    const step = 1;
    let val = this.getFieldValue();
    val =
      val !== null && val !== undefined && val !== '' ? parseInt(val, 10) : 0;
    const newV = val - step;
    if (val !== null && newV <= min) {
      this.writeValue(min);
    } else {
      this.writeValue(newV);
    }
  }


}
