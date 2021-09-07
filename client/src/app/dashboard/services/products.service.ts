import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isDisplayProductModal = new BehaviorSubject(false);
  isDisplayBagModal =  new BehaviorSubject(false);
  toDisplayProduct =  new BehaviorSubject(null);

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
}
