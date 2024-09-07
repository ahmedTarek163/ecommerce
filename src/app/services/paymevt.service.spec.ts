import { TestBed } from '@angular/core/testing';

import { PaymevtService } from './paymevt.service';

describe('PaymevtService', () => {
  let service: PaymevtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymevtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
