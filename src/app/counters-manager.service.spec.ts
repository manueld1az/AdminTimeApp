import { TestBed } from '@angular/core/testing';

import { CountersManagerService } from './counters-manager.service';

describe('CountersManagerService', () => {
  let service: CountersManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountersManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
