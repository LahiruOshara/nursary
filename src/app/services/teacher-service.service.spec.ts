import { TestBed, inject } from '@angular/core/testing';

import { TeacherServiceService } from './teacher-service.service';

describe('TeacherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherServiceService]
    });
  });

  it('should be created', inject([TeacherServiceService], (service: TeacherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
