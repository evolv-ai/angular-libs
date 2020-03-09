import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<DialogComponent>,
		private route: ActivatedRoute,
		@Inject('evolv') private evolv: any
	) {}

	ngOnInit() {}

	onClick = () => {
		this.dialogRef.close();
	}
}
