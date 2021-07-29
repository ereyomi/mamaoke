import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputsComponent } from './components/inputs/inputs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [InputsComponent, ButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [ReactiveFormsModule, InputsComponent, ButtonComponent]
})
export class AppFormsModule { }
