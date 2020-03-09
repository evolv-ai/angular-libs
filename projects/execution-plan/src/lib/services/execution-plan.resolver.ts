import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ExecutionPlanResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const evolv = (window as any).evolv;
    return (!evolv)
      ? Promise.reject()
      : evolv.runtime;
  }
}


