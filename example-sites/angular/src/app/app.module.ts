import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
	MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
	MatSidenavModule, MatStepperModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { FrameComponent } from './components/frame/frame.component';
import { FunnelComponent } from './components/funnel/funnel.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { EvolvDirective } from './directives/evolv.directive';
import { EvolvResolver, ExecutionPlanModule } from "execution-plan";


const MaterialModules = [
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatStepperModule,
	MatSidenavModule,
	MatTabsModule,
	MatToolbarModule
];

@NgModule({
	declarations: [
		AppComponent,
		CheckoutComponent,
		DialogComponent,
		ProductListComponent,
		ProductTileComponent,
		OrderItemComponent,
		FrameComponent,
		FunnelComponent,
		EvolvDirective
	],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...MaterialModules,
    ExecutionPlanModule
  ],
	providers: [
		{
			provide: 'evolv',
			useValue: (window as any).evolv
		},
    EvolvResolver
	],
	bootstrap: [AppComponent],
	entryComponents: [
		DialogComponent
	]
})
export class AppModule { }
