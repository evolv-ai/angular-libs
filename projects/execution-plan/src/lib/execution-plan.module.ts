import { NgModule } from '@angular/core';
import {AfterViewInitDirective} from "./directives/after-view-init.directive";
import {ExecutionPlanService} from "./services/execution-plan.service";



@NgModule({
  declarations: [
    AfterViewInitDirective
  ],
  imports: [
  ],
  exports: [
    AfterViewInitDirective
  ],
  providers: [
    ExecutionPlanService
  ]
})
export class ExecutionPlanModule { }
