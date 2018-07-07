import { TestBed, inject } from '@angular/core/testing';

import { TransferSalaryDetailsService } from './transfer-salary-details.service';

describe('TransferSalaryDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferSalaryDetailsService]
    });
  });

  it('should be created', inject([TransferSalaryDetailsService], (service: TransferSalaryDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
