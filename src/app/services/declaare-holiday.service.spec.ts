import { TestBed, inject } from '@angular/core/testing';

import { DeclaareHolidayService } from './declaare-holiday.service';

describe('DeclaareHolidayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeclaareHolidayService]
    });
  });

  it('should be created', inject([DeclaareHolidayService], (service: DeclaareHolidayService) => {
    expect(service).toBeTruthy();
  }));
});
