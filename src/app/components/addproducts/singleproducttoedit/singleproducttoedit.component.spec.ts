import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproducttoeditComponent } from './singleproducttoedit.component';

describe('SingleproducttoeditComponent', () => {
  let component: SingleproducttoeditComponent;
  let fixture: ComponentFixture<SingleproducttoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleproducttoeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleproducttoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
