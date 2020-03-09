import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { ExecutionPlanService } from "@evolv-ai/angular-execution-plan";


@Component({
	selector: 'app-frame',
	templateUrl: './frame.component.html',
	styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {
	private runtime: any;

	constructor(
		private dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private evolv: ExecutionPlanService
	) {
		this.runtime = evolv.getRuntime();

		router.events.subscribe(async (event) => {
			if (event instanceof ActivationEnd) {
        (await this.runtime).rerun();
			}
		});
	}

	openDialog() {
		const dialogRef = this.dialog.open(DialogComponent, {
			width: '250px',
			data: {}
		});

		dialogRef.afterClosed().subscribe(result => {
      this.runtime.then((runtime) => runtime.activate('Main_Page-15211'));
			console.log('The dialog was closed');
		});
	}

	async ngOnInit() {
		const handler = async () => {
      (await this.runtime).rerun();
      (await this.evolv.getEvolv()).off('stagecompleted', handler);
		};

    (await this.evolv.getEvolv()).on('stagecompleted', handler);
	}
}
