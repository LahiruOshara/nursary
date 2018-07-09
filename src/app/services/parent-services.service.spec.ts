import { TestBed, inject } from '@angular/core/testing';

import { ParentServicesService } from './parent-services.service';

describe('ParentServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentServicesService]
    });
  });

  it('should be created', inject([ParentServicesService], (service: ParentServicesService) => {
    expect(service).toBeTruthy();
  }));
});
