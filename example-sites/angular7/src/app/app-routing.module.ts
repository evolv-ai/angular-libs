import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './components/checkout/checkout.component';
import { FunnelComponent } from './components/funnel/funnel.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FrameComponent } from './components/frame/frame.component';
import { ProductsResolver } from './services';

const routes: Routes = [
	{
		path: '',
		component: FrameComponent,
		children: [
			{
				path: 'products',
				component: ProductListComponent,
				resolve: {
					products: ProductsResolver
				}
			},
			{
				path: 'funnel',
				component: FunnelComponent
			},
			{
				path: 'checkout',
				component: CheckoutComponent
			},
			{
				path: '',
				redirectTo: '/products',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
