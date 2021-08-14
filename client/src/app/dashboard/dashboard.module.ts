import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardCategoriesComponent } from './components/dashboard-categories/dashboard-categories.component';
import { DashboardProductComponent } from './components/dashboard-product/dashboard-product.component';
import { DashboardDetailsModalComponent } from './components/dashboard-details-modal/dashboard-details-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardCategoriesComponent,
    DashboardProductComponent,
    DashboardDetailsModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
})
export class DashboardModule { }
