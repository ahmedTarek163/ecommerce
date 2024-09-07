import { TestBed } from '@angular/core/testing';

import { AutthService } from './autth.service';

describe('AutthService', () => {
  let service: AutthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
