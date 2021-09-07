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
      id: 1,
      name: 'Pepper soup',
      image: 'pepper-soup-goat-meat.jpg',
      amount: 1500,
      category: 'soup',
    },
    {
      id: 2,
      name: 'Egusi soup',
      image: 'egusi-soup.jpg',
      amount: 2000,
      category: 'soup',
    },
    {
      id: 3,
      name: 'cat pepper soup',
      image: 'catfish-pepper-soup.jpg',
      amount: 3700,
      category: 'soup',
    },
    {
      id: 4,
      name: 'Native soup',
      image: 'water-leave-soup.jpg',
      amount: 1200,
      category: 'soup',
    },
    {
      id: 5,
      name: 'Fried Rice',
      image: 'fried-rice.jpg',
      amount: 1500,
      category: 'food',
    },
    {
      id: 6,
      name: 'Jollof Rice',
      image: 'jollof-rice.webp',
      amount: 1500,
      category: 'food'
    },
    {
      id: 7,
      name: 'Afang soup',
      image: 'nigerian-afang-soup.jpg',
      amount: 800,
      category: 'soup',
    },
    {
      id: 8,
      name: 'Rice and stew',
      image: 'rice-stew.jpeg',
      amount: 15500,
      category: 'food',
    },
    {
      id: 9,
      name: 'Beans',
      image: 'beans.jpeg',
      amount: 15500,
      category: 'food',
    },
    {
      id: 10,
      name: 'Plantain',
      image: 'plaintain.jpeg',
      amount: 15500,
      category: 'food',
    },
    {
      id: 11,
      name: 'Yam',
      image: 'yam.jpeg',
      amount: 15500,
      category: 'food',
    },
    {
      id: 12,
      name: 'Potato',
      image: 'potatoes.jpg',
      amount: 15500,
      category: 'food',
    },
    {
      id: 13,
      name: 'Eba',
      image: 'eba.jpeg',
      amount: 15500,
      category: 'swallow',
    },
    {
      id: 14,
      name: 'Fufu',
      image: 'fufu.jpeg',
      amount: 15500,
      category: 'swallow',
    },
    {
      id: 15,
      name: 'Fried chicken',
      image: 'fried-chiken.jpeg',
      amount: 15500,
      category: 'protein',
    },
    {
      id: 16,
      name: 'Fried turkey',
      image: 'turkey.jpeg',
      amount: 15500,
      category: 'protein',
    },
    {
      id: 17,
      name: 'Snail',
      image: 'snail.jpeg',
      amount: 15500,
      category: 'protein',
    },
    {
      id: 18,
      name: 'Ponmo',
      image: 'pomo.jpeg',
      amount: 15500,
      category: 'protein',
    },
    {
      id: 19,
      name: 'Sprite',
      image: 'sprite.jpeg',
      amount: 15500,
      category: 'drinks',
    },
    {
      id: 20,
      name: 'Coke',
      image: 'coca-cola.jpeg',
      amount: 15500,
      category: 'drinks',
    },
    {
      id: 21,
      name: 'Fanta',
      image: 'fanta.jpeg',
      amount: 15500,
      category: 'drinks',
    },
    {
      id: 22,
      name: 'Pepsi',
      image: 'fanta.jpeg',
      amount: 15500,
      category: 'drinks',
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
