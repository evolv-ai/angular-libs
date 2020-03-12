import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {timer} from "rxjs";

export const EXECUTION_PLAN_MAX_WAIT = new InjectionToken<string>('executionPlanMaxWait');

@Injectable({
  providedIn: 'root'
})
export class ExecutionPlanService {
  constructor(@Inject(EXECUTION_PLAN_MAX_WAIT) @Optional() public maxWait?: number) {
    this.maxWait = maxWait || 100;
  }

  protected _extractEvolvFromWindow() {
    return (window as any).evolv;
  }

  public getEvolv(): Promise<any> {
    let startTime = Date.now();
    return new Promise((resolve, reject) => {
      let subscription = timer(0, 10).subscribe((t) => {
        let evolv = this._extractEvolvFromWindow();
        if (evolv) {
          subscription.unsubscribe();
          resolve(evolv);
        } else if (Date.now() - startTime > this.maxWait) {
          subscription.unsubscribe();
          reject(`Evolv not found within ${this.maxWait}ms`)
        }
      });
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
        })
    });
  }
}
