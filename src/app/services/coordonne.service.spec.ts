import { TestBed } from '@angular/core/testing';

import { CoordonneService } from './coordonne.service';

describe('CoordonneService', () => {
  let service: CoordonneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordonneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
