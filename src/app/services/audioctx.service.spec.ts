import { TestBed } from '@angular/core/testing';

import { AudioctxService } from './audioctx.service';

describe('AudioctxService', () => {
  let service: AudioctxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioctxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
