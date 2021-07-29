import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppFormsModule } from '../shared/forms/app-forms.module';
import { SigninRoutingModule } from './signin.routing.module';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppFormsModule,
    SigninRoutingModule
  ],
  exports: [SigninComponent]
})
export class SigninModule { }
