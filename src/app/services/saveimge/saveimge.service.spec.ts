import { TestBed } from '@angular/core/testing';

import { SaveimgeService } from './saveimge.service';

describe('SaveimgeService', () => {
  let service: SaveimgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveimgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
