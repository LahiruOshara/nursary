import { TestBed, inject } from '@angular/core/testing';

import { MaintenanceDetailService } from './maintenance-detail.service';

describe('MaintenanceDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaintenanceDetailService]
    });
  });

  it('should be created', inject([MaintenanceDetailService], (service: MaintenanceDetailService) => {
    expect(service).toBeTruthy();
  }));
});
