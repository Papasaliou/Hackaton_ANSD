import { TestBed } from '@angular/core/testing';

import { GerantsService } from './gerants.service';

describe('GerantsService', () => {
  let service: GerantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
