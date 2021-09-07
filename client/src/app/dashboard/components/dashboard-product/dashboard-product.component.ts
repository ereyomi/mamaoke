import { Component, OnInit } from '@angular/core';
import { dummyProducts } from '../../dashboard-dummy-products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss']
})
export class DashboardProductComponent implements OnInit {
  products = dummyProducts;

  constructor(private pS: ProductsService) { }

  ngOnInit(): void { }
  formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: 'NGN',
    }).format(price);
  };
  cart(product: any): void {
    this.pS.openProductModal(product);
  }

}
