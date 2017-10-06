import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import {
    siteTitle
} from '../constants';

@Component({
    selector: 'looky-not-found',
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {
    pathUrl: Object;

    private route: ActivatedRoute;
    private titleService: Title;

    constructor(route: ActivatedRoute, titleService: Title) {
        this.route = route;
        this.titleService = titleService;
        this.pathUrl = {value: ''};
    }

    ngOnInit() {
        this.titleService.setTitle(`Error 404 :: ${siteTitle}`);
        this.pathUrl = {
            value: this.route.snapshot.url.map(url => {
                return url.path;
            }).join('/')
        };
    }
}
