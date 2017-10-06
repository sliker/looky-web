import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { siteTitle } from '../../constants';

@Component({
    templateUrl: './terms.component.html'
})
export class TermsComponent {
    private titleService: Title;

    constructor(titleService: Title) {
        this.titleService = titleService;

        this.titleService.setTitle(`Terms of Use :: ${siteTitle}`);
    }
}
