import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormDialogComponent } from './order-form-dialog.component';

describe('OrderFormDialogComponent', () => {
  let component: OrderFormDialogComponent;
  let fixture: ComponentFixture<OrderFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderFormDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
