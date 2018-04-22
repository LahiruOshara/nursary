import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForAdvancePaymentComponent } from './ask-for-advance-payment.component';

describe('AskForAdvancePaymentComponent', () => {
  let component: AskForAdvancePaymentComponent;
  let fixture: ComponentFixture<AskForAdvancePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskForAdvancePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForAdvancePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
