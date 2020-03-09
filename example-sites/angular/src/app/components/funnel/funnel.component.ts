import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-funnel',
	templateUrl: './funnel.component.html',
	styleUrls: ['./funnel.component.scss']
})
export class FunnelComponent implements OnInit {
	private runtime: any;

	constructor(private route: ActivatedRoute) {
		const { snapshot } = route;
		this.runtime = snapshot.root.children[0].data.evolvRuntime;
	}

	ngOnInit() {}

	onStepperChange = (event) => {
		//this.runtime.rerun();
	}
}
