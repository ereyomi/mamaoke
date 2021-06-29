import { Component, OnInit } from '@angular/core';
import {
  faStar
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss']
})
export class DashboardProductComponent implements OnInit {
  starIcon = faStar;
  products = [
    {
      name: 'Pepper soup',
      image: 'pepper-soup-goat-meat.jpg'
    },
    {
      name: 'Egusi soup',
      image: 'egusi-soup.jpg'
    },
    {
      name: 'cat pepper soup',
      image: 'catfish-pepper-soup.jpg'
    },
    {
      name: 'Water leaf',
      image: 'water-leave-soup.jpg'
    },
    {
      name: 'Fried Rice',
      image: 'fried-rice.jpg'
    },
    {
      name: 'Jollof Rice',
      image: 'jollof-rice.webp'
    },
    {
      name: 'Afang soup',
      image: 'nigerian-afang-soup.jpg'
    },
    {
      name: 'Pepper soup b',
      image: 'pepper-soup.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

}
