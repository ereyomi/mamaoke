import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isDisplay = true;
  constructor(private pS: ProductsService) { }

  ngOnInit(): void {
  }
  closeModal(): void {
    this.pS.closeProductModal();
  }
  stopModalPropagation(event: Event): void {
    event.stopPropagation();
  }

}
