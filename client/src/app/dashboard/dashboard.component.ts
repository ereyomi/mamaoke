import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InputConfig } from '../shared/forms/models/input/input-config';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  switchIt: any = 'bag';
  isDisplay = true;
  isDisplay$: Subscription = this.pS.getBagModalDisplayStatus().subscribe(status => this.isDisplay = status);
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
  ngOnInit(): void { }
  closeModal(): void {
    this.pS.closeBagModal();
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
