import { Component, ElementRef, OnInit } from '@angular/core';
import {
  faShoppingCart,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { InputConfigWithPrefix } from 'src/app/shared/forms/config/input/input-config-with-prefix';
import { InputConfig } from 'src/app/shared/forms/models/input/input-config';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  public text: String | undefined;
  target: any | undefined;
/*
  @HostListener('document:click', ['$event'])
  clickout(event: { target: any; }) {
    // console.log(event.target.localName);
    // this.eRef.nativeElement
    this.eventChecker(event);
  } */
  searchConfig: InputConfig = InputConfigWithPrefix('', 'search', 'Search by food name', 'search');
  icons = {
    cart: faShoppingCart,
    search: faSearch
  };
  searchStatus = true;
  numberOfItemsInCart!: number;
  // numberOfItemsInCart$ =

  constructor(private eRef: ElementRef, private pS: ProductsService) { }

  ngOnInit(): void {
    this.pS.getTotalNumberOfItemsInCart.subscribe((d: number) => {
      this.numberOfItemsInCart = d
      console.log(d);
    });
   }
  toggleSearched(): void {
    this.searchStatus = !this.searchStatus;
  }
  get isToSearch(): boolean {
    return this.searchStatus;
  }
  eventChecker(event: any): void {
    /* if (!event.target.classList.contains('search-icon')) {
      this.target = event.target.parentElement.nextElementSibling;
    } else {
      this.target = event.target.nextElementSibling;
    } */
    if (event.target.localName !== 'div') {
      this.toggleSearched();
    }
  }
  openModal(): void {
    this.pS.openBagModal();
  }

}
