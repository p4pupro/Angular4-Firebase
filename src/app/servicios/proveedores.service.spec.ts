/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProveedoresService } from './proveedores.service';

describe('ProveedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProveedoresService]
    });
  });

  it('should ...', inject([ProveedoresService], (service: ProveedoresService) => {
    expect(service).toBeTruthy();
  }));
});
