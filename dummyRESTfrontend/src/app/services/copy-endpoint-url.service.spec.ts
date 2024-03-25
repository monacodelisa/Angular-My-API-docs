import { TestBed } from '@angular/core/testing';

import { CopyEndpointUrlService } from './copy-endpoint-url.service';

describe('CopyEndpointUrlService', () => {
  let service: CopyEndpointUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopyEndpointUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
