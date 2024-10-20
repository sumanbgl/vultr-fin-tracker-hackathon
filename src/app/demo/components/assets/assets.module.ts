import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetsComponent } from './assets.component';
import { AssetsRoutingModule } from './assets-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AssetsRoutingModule,
		ToolbarModule,
		ButtonModule,
		RippleModule,
		SplitButtonModule,
		AccordionModule,
		TabViewModule,
		FieldsetModule,
		MenuModule,
		InputTextModule,
		DividerModule,
		SplitterModule,
		PanelModule,
		TableModule,
		ToggleButtonModule,
		ToastModule,
	],
	declarations: [AssetsComponent]
})
export class AssetsModule { }
