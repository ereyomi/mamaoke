import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormsModule } from './forms/app-forms.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppFormsModule,
    SidebarModule
  ],
  exports: [
    ReactiveFormsModule,
    AppFormsModule,
    SidebarModule
  ]
})
export class SharedModule { }
