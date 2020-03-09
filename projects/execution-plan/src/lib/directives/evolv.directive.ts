import { AfterViewInit, Directive } from '@angular/core';
import {EvolvService} from "../services/evolv.service";


@Directive({
  selector: '[evolvRun]'
})
export class EvolvDirective implements AfterViewInit {
  private runtime: Promise<any>;

  constructor(private evolv: EvolvService) {
    this.runtime = this.evolv.getRuntime();
  }

  async ngAfterViewInit() {
    (await this.runtime).rerun();
  }
}
