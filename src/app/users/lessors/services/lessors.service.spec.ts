import { TestBed } from '@angular/core/testing';

import { LessorsService } from './lessors.service';

describe('ArrendadoresService', () => {
  let service: LessorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
