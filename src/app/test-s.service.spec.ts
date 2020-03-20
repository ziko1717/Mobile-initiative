import { TestBed } from '@angular/core/testing';

import { TestSService } from './test-s.service';

describe('TestSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestSService = TestBed.get(TestSService);
    expect(service).toBeTruthy();
  });
});
