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
    qty: 2
  },
  {
    id: 56,
    name: 'Pepper soup',
    image: 'pepper-soup-goat-meat.jpg',
    amount: 1500,
    category: 'soup',
    qty: 2
  },
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
  updateProductInCart(data: any) {
    const d = [...this.cart$.value];
    // perform deep find Index
    const prodIndex = d.findIndex(dd => dd.id === data.id);
    d[prodIndex] = data;
    this.cart$.next(d);
  }
  removeProductProductInCart(id: string | number): void {
    const dd = this.cart$.value.filter(d => d.id !== id);
    this.cart$.next(dd);
  }
}
