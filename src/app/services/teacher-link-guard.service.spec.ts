import { TestBed, inject } from '@angular/core/testing';

import { TeacherLinkGuardService } from './teacher-link-guard.service';

describe('TeacherLinkGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherLinkGuardService]
    });
  });

  it('should be created', inject([TeacherLinkGuardService], (service: TeacherLinkGuardService) => {
    expect(service).toBeTruthy();
  }));
});
