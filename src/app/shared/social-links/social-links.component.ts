import { Component } from '@angular/core';

@Component({
    selector: 'looky-social-links',
    templateUrl: 'social-links.component.html',
    styleUrls: ['social-links.component.scss']
})
export class SocialLinksComponent {
    menuSocialItems: Object[];

    constructor() {
        this.menuSocialItems = [
            {
                name: 'Facebook',
                path: 'https://www.facebook.com/lookyapp/',
                iconClass: 'icon-Facebook'
            },
            {
                name: 'Twitter',
                path: 'https://twitter.com/Looky_Pets',
                iconClass: 'icon-Twitter'
            },
            {
                name: 'Instagram',
                path: 'https://www.instagram.com/lookypets/',
                iconClass: 'icon-Instagram'
            }
        ];
    }
}
