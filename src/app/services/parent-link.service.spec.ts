import { TestBed, inject } from '@angular/core/testing';

import { ParentLinkService } from './parent-link.service';

describe('ParentLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentLinkService]
    });
  });

  it('should be created', inject([ParentLinkService], (service: ParentLinkService) => {
    expect(service).toBeTruthy();
  }));
});
