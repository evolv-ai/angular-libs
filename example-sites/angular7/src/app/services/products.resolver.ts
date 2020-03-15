import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Product } from '../models';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {

	constructor(private http: HttpClient) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
		return this.http.get<Product[]>('https://my.api.mockaroo.com/products.json?key=ae3596f0');
	}
}
