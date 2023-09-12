import { TestBed } from '@angular/core/testing';

import { TravelRequestsService } from './travel-requests.service';

describe('TravelRequestsService', () => {
  let service: TravelRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
