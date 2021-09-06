import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardProductsPageeComponent } from "./components/dashboard-products-pagee/dashboard-products-pagee.component";
import { InvoiceComponent } from "./components/orders/invoice/invoice.component";
import { OrdersDetailsComponent } from "./components/orders/orders-details/orders-details.component";
import { OrdersListComponent } from "./components/orders/orders-list/orders-list.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardProductsPageeComponent
      },
      {
        path: 'orders-list',
        component: OrdersListComponent,
      },
      {
        path: 'orders-details',
        component: OrdersDetailsComponent,
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
