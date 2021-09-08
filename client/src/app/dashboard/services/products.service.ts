import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isDisplayProductModal = new BehaviorSubject(false);
  isDisplayBagModal =  new BehaviorSubject(false);
  toDisplayProduct =  new BehaviorSubject(null);
  cart$ = new BehaviorSubject<Array<any>>([
    {
    id: 55,
    name: 'Pepper soup',
    image: 'pepper-soup-goat-meat.jpg',
    amount: 1500,
    category: 'soup',
    qty: 1
  },
  {
    id: 56,
    name: 'Pepper soup',
    image: 'pepper-soup-goat-meat.jpg',
    amount: 1500,
    category: 'soup',
    qty: 1
  }
]);

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
    this.cart$.next(
      [...this.cart$.value, {...data, qty: 1}]
    );
    this.openBagModal();
  }
  getProductsinCart() {
    return this.cart$.asObservable();
  }
}
