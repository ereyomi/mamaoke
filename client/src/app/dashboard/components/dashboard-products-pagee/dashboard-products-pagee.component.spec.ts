import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductsPageeComponent } from './dashboard-products-pagee.component';

describe('DashboardProductsPageeComponent', () => {
  let component: DashboardProductsPageeComponent;
  let fixture: ComponentFixture<DashboardProductsPageeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProductsPageeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProductsPageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
