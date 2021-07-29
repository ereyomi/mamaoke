import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BottomnavComponent } from './components/bottomnav/bottomnav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NavigationComponent,
    SidebarComponent,
    BottomnavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [NavigationComponent, SidebarComponent, BottomnavComponent]
})
export class NavigationModule { }
