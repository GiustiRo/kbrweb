import { TestBed } from '@angular/core/testing';

import { NftportService } from './nftport.service';

describe('NftportService', () => {
  let service: NftportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
