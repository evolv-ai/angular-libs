import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';

export const EXECUTION_PLAN_MAX_WAIT = new InjectionToken<string>('executionPlanMaxWait');

@Injectable()
export class ExecutionPlanService {
  constructor(@Inject(EXECUTION_PLAN_MAX_WAIT) @Optional() public maxWait?: number) {
    this.maxWait = maxWait || 100;
  }

  protected _extractEvolvFromWindow() {
    return (window as any).evolv;
  }

  private deferredRetrieval(resolve, reject, startTime: number) {
    setTimeout( () => {
      const evolv = this._extractEvolvFromWindow();
      if (evolv) {
        resolve(evolv);
      } else if (Date.now() - startTime < this.maxWait) {
        this.deferredRetrieval(resolve, reject, startTime);
      } else {
        reject(`Evolv not found within ${this.maxWait}ms`);
      }
    }, 10);
  }

  public getEvolv(): Promise<any> {
    return new Promise((resolve, reject) => {
      const evolv = this._extractEvolvFromWindow();
      if (evolv) {
        resolve(evolv);
      } else {
        this.deferredRetrieval(resolve, reject, Date.now());
      }
    });
  }

  public getRuntime(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getEvolv()
        .then((evolv) => {
          resolve(evolv.runtime);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
