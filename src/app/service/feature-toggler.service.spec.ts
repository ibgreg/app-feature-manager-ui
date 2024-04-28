import { TestBed } from '@angular/core/testing';

import { FeatureTogglerService } from './feature-toggler.service';

describe('FeatureTogglerService', () => {
  let service: FeatureTogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureTogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
