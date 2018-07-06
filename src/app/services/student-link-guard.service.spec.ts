import { TestBed, inject } from '@angular/core/testing';

import { StudentLinkGuardService } from './student-link-guard.service';

describe('StudentLinkGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentLinkGuardService]
    });
  });

  it('should be created', inject([StudentLinkGuardService], (service: StudentLinkGuardService) => {
    expect(service).toBeTruthy();
  }));
});
