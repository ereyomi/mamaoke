import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, Validators } from '@angular/forms';
import { InputConfig } from '../../models/input/input-config';
import { get } from 'lodash';
import { faLock, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsComponent),
      multi: true,
    },
  ],
})
export class InputsComponent implements OnInit, ControlValueAccessor {

  icons: any = {
    lock: faLock,
    user: faUser,
    search: faSearch
  };

  @Input() config!: InputConfig;
  @Input() class!: string | '';

  onChange!: (_: any) => void;
  onTouched!: () => void;
  value: any;
  formGroup = this.fb.group({
    input: this.fb.control(null),
  });
  constructor(private fb: FormBuilder) { }
  writeValue(obj: any): void {
    this.value = obj;
    this.formGroup.setValue({ input: obj });
    this.formGroup.updateValueAndValidity();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable({ emitEvent: true });
    } else {
      this.formGroup.enable({ emitEvent: true });
    }
  }

  getFieldValue() {
    const field = this.formGroup.get('input');
    return field ? field.value : null;
  }
  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((vals) => {
      if (this.onChange) {
        this.onChange(this.getFieldValue());
      }
    });
    if (this.isDisable) {
      this.formGroup.disable();
    }
  }

  get isDisable() {
    return get(this.config?.formStatus, 'isDisabled', false);
  }

  get icon() {
    return this.icons[this.config?.prefixIcon?.icon!] || this.icons.user;
  }

}
