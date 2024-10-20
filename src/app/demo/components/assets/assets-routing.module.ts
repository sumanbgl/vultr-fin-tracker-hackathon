import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssetsComponent } from './assets.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AssetsComponent }
	])],
	exports: [RouterModule]
})
export class AssetsRoutingModule { }
