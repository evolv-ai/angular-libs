import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';


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
		@Inject('evolv') private evolv: any
	) {
		const { snapshot } = route;
		this.runtime = snapshot.data.evolvRuntime;

		router.events.subscribe((event) => {
			if (event instanceof ActivationEnd) {
				this.runtime.rerun();
			}
		});
	}

	openDialog() {
		const dialogRef = this.dialog.open(DialogComponent, {
			width: '250px',
			data: {}
		});

		dialogRef.afterClosed().subscribe(result => {
			this.runtime.activate('Main_Page-15211');
			console.log('The dialog was closed');
		});
	}

	ngOnInit() {
		const handler = async () => {
			this.runtime.rerun();
			this.evolv.off('stagecompleted', handler);
		};

		this.evolv.on('stagecompleted', handler);
	}
}
