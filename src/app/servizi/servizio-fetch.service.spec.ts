import { TestBed } from '@angular/core/testing';

import { ServizioFetchService } from './servizio-fetch.service';

describe('ServizioFetchService', () => {
  let service: ServizioFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
