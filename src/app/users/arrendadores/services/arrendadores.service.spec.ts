import { TestBed } from '@angular/core/testing';

import { ArrendadoresService } from './arrendadores.service';

describe('ArrendadoresService', () => {
  let service: ArrendadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrendadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
