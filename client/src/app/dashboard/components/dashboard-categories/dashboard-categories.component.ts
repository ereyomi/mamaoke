import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss']
})
export class DashboardCategoriesComponent implements OnInit {
  categories = [
    {
      name: 'Doughnutt',
      icon: 'doughnut.svg'
    },
    {
      name: 'Food',
      icon: 'rice.svg'
    },
    {
      name: 'Soup',
      icon: 'soup.svg'
    },
    {
      name: 'Soda',
      icon: 'soda-coke.svg'
    },
    {
      name: 'Hot Drinks',
      icon: 'hot-drinks-coffee-cup.svg'
    },
    {
      name: 'Hot Drinks',
      icon: 'drink-cola-coke.svg'
    },
    {
      name: 'Hot Drinks',
      icon: 'drinks-b.svg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
