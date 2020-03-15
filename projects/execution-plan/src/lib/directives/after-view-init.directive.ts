import { AfterViewInit, Directive } from '@angular/core';
import {ExecutionPlanService} from '../services/execution-plan.service';


@Directive({
  selector: '[evolvAfterViewInit]'
})
export class AfterViewInitDirective implements AfterViewInit {
  private runtime: Promise<any>;

  constructor(private evolv: ExecutionPlanService) {
    this.runtime = this.evolv.getRuntime();
  }

  async ngAfterViewInit() {
    (await this.runtime).rerun();
  }
}
