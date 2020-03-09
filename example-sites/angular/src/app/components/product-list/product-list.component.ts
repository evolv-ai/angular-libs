import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../../models';


@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	public products$: Observable<Product[]>;
	public rows$: Observable<number>;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private route: ActivatedRoute
	) {
		this.rows$ = combineLatest(
			breakpointObserver.observe([Breakpoints.Handset]).pipe(map(bp => bp.matches)),
			breakpointObserver.observe([Breakpoints.Tablet]).pipe(map(bp => bp.matches)),
			breakpointObserver.observe([Breakpoints.Web]).pipe(map(bp => bp.matches)),
		)
		.pipe(
			map(values => {
				return values.findIndex(v => v) + 1;
			})
		);
	}

	ngOnInit() {
		this.products$ = this.route.data.pipe(
			map(data => data.products)
		);
	}
}
