import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LanguageService } from '../shared/language.service';
// import { Observable } from 'rxjs/observable';
// import { Store } from '@ngrx/store';

// import { AppState, getLang } from '../reducers';
import {siteTitle} from '../constants';

@Component({
  selector: 'looky-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  lang: string;
  homeImage: string;

  private titleService: Title;
  private languageService: LanguageService;

  constructor(titleService: Title, languageService: LanguageService) {
    this.titleService = titleService;
    this.languageService = languageService;
    this.lang = 'en'; // store.select(getLang);

    this.titleService.setTitle(`Home :: ${siteTitle}`);

    this.homeImage = this.getHomeImage(this.languageService.getLang());
    /* this.lang.subscribe((lang: string) => {
        this.homeImage = this.getHomeImage(lang);
    }); */
  }

  getHomeImage(lang: string) {
    switch (lang) {
      case 'en':
        return require('../../assets/img/home-phone-1-en.png');
      case 'es':
        return require('../../assets/img/home-phone-1-es.png');
      default:
        return '';
    }
  }
}
