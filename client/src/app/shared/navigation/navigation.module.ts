import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BottomnavComponent } from './components/bottomnav/bottomnav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent,
    SidebarComponent,
    BottomnavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [NavigationComponent, SidebarComponent, BottomnavComponent]
})
export class NavigationModule { }
