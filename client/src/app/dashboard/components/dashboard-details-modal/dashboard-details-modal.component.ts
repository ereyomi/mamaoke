import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard-details-modal',
  templateUrl: './dashboard-details-modal.component.html',
  styleUrls: ['./dashboard-details-modal.component.scss']
})
export class DashboardDetailsModalComponent implements OnInit {

  name = 'mock name';
  isDisplay = true;
  isDisplay$: Subscription = this.pS.getProductModalDisplayStatus().subscribe(status => this.isDisplay = status);;
  componentForm: FormGroup = this.fb.group({
    quantity: [
      '0',
      [
        Validators.required,
      ],
    ],
  });
  @HostListener('click', ['$event'])
  onClick(e: any): void { }
  constructor(private fb: FormBuilder, private pS: ProductsService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.pS.closeProductModal();
  }
  openBag(): void {
    this.closeModal();
    this.pS.openBagModal();
  }
  stopModalPropagation(event: Event): void {
    event.stopPropagation();
  }
  ngOnDestroy(): void {
    this.isDisplay$.unsubscribe();
  }

}
