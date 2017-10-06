import { Component } from '@angular/core';

@Component({
    selector: 'looky-how-works',
    templateUrl: './how-works.component.html',
    styleUrls: ['./how-works.component.scss']
})
export class HowWorksComponent {
    listItems: Object[];

    constructor() {
        this.listItems = [
            {
                title: 'HOW_WORKS.ITEMS.PETS.TITLE',
                iconClass: 'icon-Paw',
                description: 'HOW_WORKS.ITEMS.PETS.DESCRIPTION'
            },
            {
                title: 'HOW_WORKS.ITEMS.SEARCH.TITLE',
                iconClass: 'icon-Search',
                description: 'HOW_WORKS.ITEMS.SEARCH.DESCRIPTION'
            },
            {
                title: 'HOW_WORKS.ITEMS.LOCATION.TITLE',
                iconClass: 'icon-Alert',
                description: 'HOW_WORKS.ITEMS.LOCATION.DESCRIPTION'
            },
            {
                title: 'HOW_WORKS.ITEMS.MESSAGES.TITLE',
                iconClass: 'icon-Message',
                description: 'HOW_WORKS.ITEMS.MESSAGES.DESCRIPTION'
            },
            {
                title: 'HOW_WORKS.ITEMS.SHARE.TITLE',
                iconClass: 'icon-Share',
                description: 'HOW_WORKS.ITEMS.SHARE.DESCRIPTION'
            },
            {
                title: 'HOW_WORKS.ITEMS.LOVE.TITLE',
                iconClass: 'icon-Heart',
                description: 'HOW_WORKS.ITEMS.LOVE.DESCRIPTION'
            }
        ];
    }
}
