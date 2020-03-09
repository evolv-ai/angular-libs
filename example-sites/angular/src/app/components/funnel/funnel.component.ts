import { Component, OnInit } from '@angular/core';
import { EvolvService } from "@evolv-ai/angular-execution-plan";


@Component({
	selector: 'app-funnel',
	templateUrl: './funnel.component.html',
	styleUrls: ['./funnel.component.scss']
})
export class FunnelComponent implements OnInit {
	private runtime: any;

	constructor(evolv: EvolvService) {
		this.runtime = evolv.getRuntime();
	}

	ngOnInit() {}

	onStepperChange = async (event) => {
    (await this.runtime).rerun();
	}
}
