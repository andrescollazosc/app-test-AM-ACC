import { TestBed } from '@angular/core/testing';

import { ProcessSendService } from './process-send.service';

describe('ProcessSendService', () => {
  let service: ProcessSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
