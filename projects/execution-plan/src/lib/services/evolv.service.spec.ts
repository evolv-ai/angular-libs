import { TestBed } from '@angular/core/testing';

import { EvolvService } from './evolv.service';

describe('ExecutionPlanService', () => {
  let service: EvolvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvolvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
