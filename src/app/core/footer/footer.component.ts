import { Component } from '@angular/core';

@Component({
    selector: 'looky-layout-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    menuItems: Object[];

    constructor() {
        this.menuItems = [
            {
                name: 'Privacy',
                path: '/legal/privacy'
            },
            {
                name: 'Terms',
                path: '/legal/terms'
            }
        ];
    }
}
