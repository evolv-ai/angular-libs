# Evolv Execution-Plan Angular Integration

Angular can introduce extra timing concerns to updating the page in an Evolv project. It is not uncommon that Evolv can render the project changes, then have Angular update the DOM over the top.

This library gives extra control over Evolv's functionality on the page.

## Importing the Library
Include in your project by running

`npm install @evolv/angular-execution-plan`

## Directives
Evolv provides directives to automatically apply project changes based on Angular lifecycle hooks.

e.g. Include the `AfterViewInitDirective` and mark components with `evolvAfterViewInit`
```
<mat-horizontal-stepper>
  <mat-step evolvAfterViewInit>
    <ng-template matStepLabel>Payment</ng-template>
  </mat-step>
  <mat-step evolvAfterViewInit>
    <ng-template matStepLabel>Confirm</ng-template>
  </mat-step>
</mat-horizontal-stepper>
```

## Direct Runtime Access
The `ExecutionPlanService` provides direct access to the Evolv execution plan and the runtime.

This allows you to directly reapply any changes

```
@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  private runtime: any;

  constructor(evolv: ExecutionPlanService) {
    this.runtime = evolv.getRuntime();
  }

  manualRun = async (event) => {
    (await this.runtime).rerun();
  }
}
```

You can also directly access the Evolv instance and call any of the [native functionality](https://media.evolv.ai/releases/latest/docs/index.html)

```
@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  private evolv: any;

  constructor(evolv: ExecutionPlanService) {
    this.evolv = evolv.getEvolv();
    (await this.evolv).on()
  }

  manualRun = async (event) => {
    (await this.runtime).on('stagecompleted', () => console.log('stagecompleted'));
  }
}
```

You can find an example site implementing these features [here](../../example-sites/angular7) 

## Development
### Code scaffolding

Run `ng generate component component-name --project execution-plan` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project execution-plan`.
> Note: Don't forget to add `--project execution-plan` or else it will be added to the default project in your `angular.json` file. 

### Build

Run `ng build execution-plan` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build execution-plan`, go to the dist folder `cd dist/execution-plan` and run `npm publish`.

### Running unit tests

Run `ng test execution-plan` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
