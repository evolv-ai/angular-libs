import {TestBed, tick} from '@angular/core/testing';
import { fakeSchedulers } from 'rxjs-marbles/jasmine/angular';

import {EXECUTION_PLAN_MAX_WAIT, ExecutionPlanService} from './execution-plan.service';

describe('ExecutionPlanService', () => {
  let service: ExecutionPlanService;
  let waitTime = 5000;

  beforeEach(() => {
    window['evolv'] = undefined;
    TestBed.configureTestingModule({
      providers: [{ provide: EXECUTION_PLAN_MAX_WAIT, useValue: waitTime }]
    });
    service = TestBed.inject(ExecutionPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pass as evolv is set before the attempt to retrieve', fakeSchedulers(advance => {
    window['evolv'] = {};
    service.getEvolv()
      .then((result) => {
        expect(true).toBe(true)
      })
      .catch(() => {
        expect(true).toBe(false)
      });

    advance(0);
  }));

  it('should pass as evolv is set in time', fakeSchedulers(advance => {
    let _currdate = 0;
    spyOn(Date, 'now').and.callFake(function() {
      return _currdate;
    });
    service.getEvolv()
      .then((result) => {
        expect(true).toBe(true)
      })
      .catch(() => {
        expect(true).toBe(false)
      });

    _currdate = waitTime - 100;
    advance(_currdate);
    window['evolv'] = {};
    _currdate = waitTime - 50;
    advance(_currdate);
  }));

  it('should fail as evolv is set too late', fakeSchedulers(advance => {
    let _currdate = 0;
    spyOn(Date, 'now').and.callFake(function() {
      return _currdate;
    });
    service.getEvolv()
      .then((result) => {
        expect(true).toBe(false)
      })
      .catch(() => {
        expect(true).toBe(true)
      });

    _currdate = waitTime + 100;
    advance(_currdate);
    window['evolv'] = {};
  }));
});
