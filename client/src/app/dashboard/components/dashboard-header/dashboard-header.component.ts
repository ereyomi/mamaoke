import { Component, OnInit } from '@angular/core';
import {
  faShoppingCart,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { InputConfigWithPrefix } from 'src/app/shared/forms/config/input/input-config-with-prefix';
import { InputConfig } from 'src/app/shared/forms/models/input/input-config';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  searchConfig: InputConfig = InputConfigWithPrefix('', 'search', 'Search by food name', 'search');
  icons = {
    cart: faShoppingCart,
    search: faSearch
  };
  searchStatus = false;
  constructor() { }

  ngOnInit(): void {
  }

}
