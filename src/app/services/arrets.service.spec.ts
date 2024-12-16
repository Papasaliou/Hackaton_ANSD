import { TestBed } from '@angular/core/testing';

import { ArretsService } from './arrets.service';

describe('ArretsService', () => {
  let service: ArretsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArretsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
