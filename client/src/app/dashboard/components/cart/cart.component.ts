import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InputConfig } from 'src/app/shared/forms/models/input/input-config';
import { ProductsService } from '../../services/products.service';
import {
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { RequestService } from 'src/app/core/request/request.service';
import {Flutterwave, InlinePaymentOptions, PaymentSuccessResponse} from "flutterwave-angular-v3"
import { distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  switchIt: any = 'bag';
  isDisplay = true; // change back to false
  isDisplay$!: Subscription;
  totalAmount: number = 0;
  componentForm = this.fb.group({
    cartFormGroup: this.fb.array([])
  });
  orderFormGroup = this.fb.group({
    firstName: '',
    lasttName: '',
    email: '',
    phone: '',
    address: ''
  });
  cart$: any;
  cartItems: any;
  //use your PUBLIC_KEY here
  publicKey = "FLWPUBK_TEST-584f40de47a6fa65b4ac934db0ead0b5-X";

  customerDetails = { name: 'Demo Customer  Name', email: 'ereyomioluwaseyi@gmail.com', phone_number: '07035432921'};

  customizations = {title: 'Customization Title', description: 'Customization Description', logo: 'https://flutterwave.com/images/logo-colored.svg'};

  meta = {'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd'};
  paymentData: InlinePaymentOptions = {
    public_key: this.publicKey,
    tx_ref: this.generateReference(),
    amount: 10,
    currency: 'NGN',
    payment_options: 'card,ussd',
    redirect_url: '',
    meta: this.meta,
    customer: this.customerDetails,
    customizations: this.customizations,
    callback: this.makePaymentCallback,
    onclose: this.closedPaymentModal,
    callbackContext: this
  };
  constructor(
    private fb: FormBuilder,
    private pS: ProductsService,
    private requestS: RequestService,
    private flutterwave: Flutterwave
    ) { }
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
    this.isDisplay$ = this.pS.getBagModalDisplayStatus().subscribe(status => this.isDisplay = status);
    this.cart$ = this.pS.getProductsinCart().subscribe(d =>
      {
        this.cartItems = d
        console.log(d);
        this.onLoadCartFormArray(this.cartItems);
      });
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
  submitDetails(): void {
    this.requestS.get('/api/payment').subscribe(res => {console.log(res)});
  }
  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Pay", response);
    this.flutterwave.closePaymentModal(5)
  }
  closedPaymentModal(): void {
    console.log('payment is closed');
  }
  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }
  payViaPromise() {
    this.flutterwave.asyncInlinePay(this.paymentData).then(
      (response) =>{
        console.log("Promise Res" , response)
        this.flutterwave.closePaymentModal(5)
      }
    )
  }
  cartItemsFormGroup() : FormArray {
    return this.componentForm.get("cartFormGroup") as FormArray;
  }
  cartFormGroupArrayItem(data: any): FormGroup {
    return this.fb.group({
      id: data?.id || '',
      name: data?.name || '',
      image: data?.image || '',
      amount: data?.amount || 0,
      category:  data?.category || 0,
      qty: data?.qty || 1
    })
  }
  addQuantity(data: any) {
    this.cartItemsFormGroup().push(
        this.cartFormGroupArrayItem(data)
      );
  }

  removeCartItemFromCartFormGroupArray(i:number) {
    this.cartItemsFormGroup().removeAt(i);
  }
  updateCheckControl(cal: any, data: any) {
    if (data.qty) {
     this.addQuantity(data);
    } else {
      cal.controls.forEach((item: FormControl, index: any) => {
        if (item.value === data.value) {
          cal.removeAt(index);
          return;
        }
      });
    }
  }
  onLoadCartFormArray(data: any) {
    const cartFormGroupArray: FormArray = this.cartItemsFormGroup();
    this.clearFormArray(cartFormGroupArray);
    if (data) {

      data.forEach((o: any) => {
        this.updateCheckControl(cartFormGroupArray, o);
      });
      this.totalAmount = data.reduce((accumulator: any, currentValue: any) => {
        return accumulator + (currentValue.amount * currentValue.qty)
      }, 0
      );
    }
  }
  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }
  change(e: any, _i: number, q: any) {
    this.pS.updateProductInCart(
      {...q, qty: e});
  }
}
