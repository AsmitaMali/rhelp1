import { TestBed } from '@angular/core/testing';

import { ResdataService } from './resdata.service';

describe('ResdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResdataService = TestBed.get(ResdataService);
    expect(service).toBeTruthy();
  });
});
