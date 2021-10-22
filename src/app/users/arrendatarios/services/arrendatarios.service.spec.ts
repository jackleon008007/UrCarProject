import { TestBed } from '@angular/core/testing';

import { ArrendatariosService } from './arrendatarios.service';

describe('ArrendatariosService', () => {
  let service: ArrendatariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrendatariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
