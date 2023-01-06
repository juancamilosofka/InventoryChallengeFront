import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysfromcustomerComponent } from './buysfromcustomer.component';

describe('BuysfromcustomerComponent', () => {
  let component: BuysfromcustomerComponent;
  let fixture: ComponentFixture<BuysfromcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuysfromcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuysfromcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
