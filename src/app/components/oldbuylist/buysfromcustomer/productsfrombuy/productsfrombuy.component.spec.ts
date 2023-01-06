import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsfrombuyComponent } from './productsfrombuy.component';

describe('ProductsfrombuyComponent', () => {
  let component: ProductsfrombuyComponent;
  let fixture: ComponentFixture<ProductsfrombuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsfrombuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsfrombuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
