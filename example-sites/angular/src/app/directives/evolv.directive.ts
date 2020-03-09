import { AfterViewInit, Directive, Inject } from '@angular/core';

@Directive({
	selector: '[evolvRun]'
})
export class EvolvDirective implements AfterViewInit {
	private runtime: Promise<any>;

	constructor(@Inject('evolv') private evolv: any) {
		this.runtime = this.evolv.runtime;
	}

	async ngAfterViewInit() {
		(await this.runtime).rerun();
	}
}
