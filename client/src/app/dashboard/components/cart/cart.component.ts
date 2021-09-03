import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InputConfig } from 'src/app/shared/forms/models/input/input-config';
import { ProductsService } from '../../services/products.service';
import {
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { validateCardNumber } from 'src/app/core/helpers/credit card/check-card';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  switchIt: any = 'continueToPayment';
  isDisplay = true; // change back to false
  isDisplay$!: Subscription;
  componentForm = this.fb.group({
    quantity: [
      '12',
      [
        Validators.required,
      ],
    ],
  });
  constructor(private fb: FormBuilder, private pS: ProductsService) { }
  inputConfig(
    placeholder: string = 'Placeholder',
    type: string = 'text'
  ): InputConfig {
    return {
      type,
      placeholder,
    };
  }
  ngOnInit(): void {
    console.log(this.isDisplay);
    // this.isDisplay$ = this.pS.getBagModalDisplayStatus().subscribe(status => this.isDisplay = status);
  }
  closeModal(): void {
    this.pS.closeBagModal();
    this.switchIt = 'bag';
  }
  stopModalPropagation(event: Event): void {
    event.stopPropagation();
  }
  switchBagView(view: string): void {
    this.switchIt = view;
  }
  ngOnDestroy(): void {
    this.isDisplay$.unsubscribe();
  }

}
