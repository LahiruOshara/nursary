import { TestBed, inject } from '@angular/core/testing';

import { LeaveAppServiceService } from './leave-app-service.service';

describe('LeaveAppServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveAppServiceService]
    });
  });

  it('should be created', inject([LeaveAppServiceService], (service: LeaveAppServiceService) => {
    expect(service).toBeTruthy();
  }));
});
