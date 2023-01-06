import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldbuylistComponent } from './oldbuylist.component';

describe('OldbuylistComponent', () => {
  let component: OldbuylistComponent;
  let fixture: ComponentFixture<OldbuylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldbuylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldbuylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
