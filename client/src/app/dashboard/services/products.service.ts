import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isDisplayProductModal = new BehaviorSubject(false);
  isDisplayBagModal =  new BehaviorSubject(false);
  toDisplayProduct =  new BehaviorSubject(null);
  cart$ = new BehaviorSubject<Array<any>>([]);
  totalQuantityNumber$ = new BehaviorSubject<number>(0);

  constructor() { }
  getProductModalDisplayStatus(): Observable<boolean> {
    return this.isDisplayProductModal.asObservable();
  }
  getBagModalDisplayStatus(): Observable<boolean> {
    return this.isDisplayBagModal.asObservable();
  }
  getBagModalProduct(): Observable<any> {
    return this.toDisplayProduct.asObservable();
  }
  openProductModal(product: any): void {
    this.toDisplayProduct.next(product);
    this.isDisplayProductModal.next(true);
  }
  closeProductModal(): void {
    this.isDisplayProductModal.next(false);
  }
  openBagModal(): void {
    this.isDisplayBagModal.next(true);
  }
  closeBagModal(): void {
    this.toDisplayProduct.next(null);
    this.isDisplayBagModal.next(false);
  }
  addToCart(data: any){
    // perform deep find Index
    const prodIndex = this.cart$.value.findIndex(dd => dd.id === data.id);
    console.log(prodIndex);
    if(prodIndex < 0) {
      this.cart$.next(
        [...this.cart$.value, {...data}]
      );
    }else {
      this.updateProductInCart(data);
    }
    // update number of Items
    this.updateNumberOfItemsInCart();
    // open cart
    // this.openBagModal();
  }
  getProductsinCart() {
    return this.cart$.asObservable();
  }
  updateProductInCart(data: any) {
    const d = [...this.cart$.value];
    // perform deep find Index
    const prodIndex = d.findIndex(dd => dd.id === data.id);
    d[prodIndex] = data;
    this.cart$.next(d);
    // update number of Items
    this.updateNumberOfItemsInCart();
  }
  removeProductProductInCart(id: string | number): void {
    const dd = this.cart$.value.filter(d => d.id !== id);
    this.cart$.next(dd);
  }
  updateNumberOfItemsInCart() {
  const quantityNumber = this.cart$.value.reduce((accumulator: any, currentValue: any) => {
      return accumulator +  currentValue.qty;
    }, 0
    );
    this.totalQuantityNumber$.next(quantityNumber);
  }
  get getTotalNumberOfItemsInCart(): Observable<number> {
    return this.totalQuantityNumber$.asObservable();
  }
}
