import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormsModule } from './forms/app-forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { NavigationModule } from './navigation/navigation.module';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
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
    NavigationModule,
    CardComponent
  ]
})
export class SharedModule { }
