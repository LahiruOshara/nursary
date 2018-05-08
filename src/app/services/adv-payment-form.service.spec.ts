import { TestBed, inject } from '@angular/core/testing';

import { AdvPaymentFormService } from './adv-payment-form.service';

describe('AdvPaymentFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvPaymentFormService]
    });
  });

  it('should be created', inject([AdvPaymentFormService], (service: AdvPaymentFormService) => {
    expect(service).toBeTruthy();
  }));
});
