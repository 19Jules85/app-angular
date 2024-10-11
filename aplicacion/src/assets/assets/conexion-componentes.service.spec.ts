import { TestBed } from '@angular/core/testing';

import { ConexionComponentesService } from './conexion-componentes.service';

describe('ConexionComponentesService', () => {
  let service: ConexionComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
