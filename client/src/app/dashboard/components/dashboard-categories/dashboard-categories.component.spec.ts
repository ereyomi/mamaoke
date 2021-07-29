import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoriesComponent } from './dashboard-categories.component';

describe('DashboardCategoriesComponent', () => {
  let component: DashboardCategoriesComponent;
  let fixture: ComponentFixture<DashboardCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
