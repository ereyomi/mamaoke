import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss']
})
export class DashboardProductComponent implements OnInit {
  products = [
    {
      name: 'Pepper soup',
      image: 'pepper-soup-goat-meat.jpg',
      amount: 1500,
    },
    {
      name: 'Egusi soup',
      image: 'egusi-soup.jpg',
      amount: 2000,
    },
    {
      name: 'cat pepper soup',
      image: 'catfish-pepper-soup.jpg',
      amount: 3700,
    },
    {
      name: 'Water leaf',
      image: 'water-leave-soup.jpg',
      amount: 1200,
    },
    {
      name: 'Fried Rice',
      image: 'fried-rice.jpg',
      amount: 1500,
    },
    {
      name: 'Jollof Rice',
      image: 'jollof-rice.webp',
      amount: 1500,
    },
    {
      name: 'Afang soup',
      image: 'nigerian-afang-soup.jpg',
      amount: 800,
    },
    {
      name: 'Pepper soup b',
      image: 'pepper-soup.jpg',
      amount: 15500,
    },
  ];

  constructor(private pS: ProductsService) { }

  ngOnInit(): void { }
  formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: 'NGN',
    }).format(price);
  };
  cart(): void {
    console.log('clicked');
    this.pS.openProductModal();
  }

}
