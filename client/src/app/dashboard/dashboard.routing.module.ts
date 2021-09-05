import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrdersListComponent } from "./components/orders/orders-list/orders-list.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'orders-list',
        component: OrdersListComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
