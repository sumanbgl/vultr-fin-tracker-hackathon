import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: '',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
                ]
            },
            {
                label: '',
                items: [
                    { label: 'Assets', icon: 'pi pi-fw pi-wallet', routerLink: ['/assets'] }
                ]
            },
            {
                label: '',
                items: [
                    { label: 'Loans', icon: 'pi pi-fw pi-credit-card', routerLink: ['/loans'] }
                ]
            },
            {
                label: '',
                items: [
                    { label: 'Bills', icon: 'pi pi-fw pi-file', routerLink: ['/bills'] }
                ]
            },
            {
                label: '',
                items: [
                    { label: 'Investments', icon: 'pi pi-fw pi-chart-line', routerLink: ['/investments'] }
                ]
            },
        ];
    }
}
