/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PresupuestosService } from './presupuestos.service';

describe('PresupuestosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresupuestosService]
    });
  });

  it('should ...', inject([PresupuestosService], (service: PresupuestosService) => {
    expect(service).toBeTruthy();
  }));
});
