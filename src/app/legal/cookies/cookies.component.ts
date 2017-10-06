import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { siteTitle } from '../../constants';

@Component({
    templateUrl: './cookies.component.html'
})
export class CookiesComponent {
    private titleService: Title;

    constructor(titleService: Title) {
        this.titleService = titleService;

        this.titleService.setTitle(`Cookies :: ${siteTitle}`);
    }
}
