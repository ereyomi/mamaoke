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
import { CartComponent } from './components/cart/cart.component';
import { FlutterwaveModule } from 'flutterwave-angular-v3';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { OrdersDetailsComponent } from './components/orders/orders-details/orders-details.component';
import { InvoiceComponent } from './components/orders/invoice/invoice.component';
import { DashboardProductsPageeComponent } from './components/dashboard-products-pagee/dashboard-products-pagee.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardCategoriesComponent,
    DashboardProductComponent,
    DashboardDetailsModalComponent,
    CartComponent,
    OrdersListComponent,
    OrdersDetailsComponent,
    InvoiceComponent,
    DashboardProductsPageeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FlutterwaveModule
  ],
})
export class DashboardModule { }
