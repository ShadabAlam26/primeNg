import { TestBed } from '@angular/core/testing';

import { PrimeTableService } from './prime-table.service';

describe('PrimeTableService', () => {
  let service: PrimeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
