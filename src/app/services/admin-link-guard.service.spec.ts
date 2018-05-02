import { TestBed, inject } from '@angular/core/testing';

import { AdminLinkGuardService } from './admin-link-guard.service';

describe('AdminLinkGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminLinkGuardService]
    });
  });

  it('should be created', inject([AdminLinkGuardService], (service: AdminLinkGuardService) => {
    expect(service).toBeTruthy();
  }));
});
