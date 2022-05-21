import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOrderSuccessComponent } from './buy-order-success.component';

describe('BuyOrderSuccessComponent', () => {
  let component: BuyOrderSuccessComponent;
  let fixture: ComponentFixture<BuyOrderSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyOrderSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyOrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
