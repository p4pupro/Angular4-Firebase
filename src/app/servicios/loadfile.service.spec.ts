/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadfileService } from './loadfile.service';

describe('LoadfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadfileService]
    });
  });

  it('should ...', inject([LoadfileService], (service: LoadfileService) => {
    expect(service).toBeTruthy();
  }));
});
