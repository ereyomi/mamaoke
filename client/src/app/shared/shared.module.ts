import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormsModule } from './forms/app-forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { NavigationModule } from './navigation/navigation.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppFormsModule,
    HeaderModule,
    NavigationModule
  ],
  exports: [
    ReactiveFormsModule,
    AppFormsModule,
    HeaderModule,
    NavigationModule
  ]
})
export class SharedModule { }
