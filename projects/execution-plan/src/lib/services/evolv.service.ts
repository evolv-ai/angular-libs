import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvolvService {

  constructor() {
  }

  public getEvolv() {
    const evolv = (window as any).evolv;
    return (!evolv)
      ? Promise.reject()
      : Promise.resolve(evolv);
  }

  public getRuntime() {
    const evolv = (window as any).evolv;
    return (!evolv)
      ? Promise.reject()
      : Promise.resolve(evolv.runtime);
  }
}
