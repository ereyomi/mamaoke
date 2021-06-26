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

  constructor() { }

  ngOnInit(): void {
  }

}
