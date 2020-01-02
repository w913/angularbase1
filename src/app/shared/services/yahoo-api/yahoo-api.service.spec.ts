import { TestBed } from '@angular/core/testing';

import { YahooApiService } from './yahoo-api.service';

describe('YahooApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YahooApiService = TestBed.get(YahooApiService);
    expect(service).toBeTruthy();
  });
});
