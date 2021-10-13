import { TestBed } from '@angular/core/testing';

import { Aoe2Service } from './aoe2.service';

describe('Aoe2Service', () => {
  let service: Aoe2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aoe2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
