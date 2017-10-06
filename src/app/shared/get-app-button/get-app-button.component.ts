import { Component } from '@angular/core';

import { LanguageService } from '../language.service';
// import { Observable } from 'rxjs';
// import { Store } from '@ngrx/store';

// import { AppState, getLang } from '../../reducers';

import {
  googlePlayUrl
} from '../../constants';

@Component({
  selector: 'looky-get-app-button',
  templateUrl: './get-app-button.component.html',
  styleUrls: ['./get-app-button.component.scss']
})
export class GetAppButtonComponent {
  appDownloadUrl: string;
  lang: string;
  buttonImage: string;

  private languageService: LanguageService;

  constructor(languageService: LanguageService) {
    this.lang = 'en';
    this.appDownloadUrl = googlePlayUrl;
    this.languageService = languageService;

    this.buttonImage = this.getButtonImage(this.languageService.getLang());

    /* this.lang.subscribe((lang: string) => {
        this.buttonImage = this.getButtonImage(lang);
    }); */
  }

  getButtonImage(lang: string) {
    switch (lang) {
      case 'en':
        return require('../../../assets/img/google-play-badge-en.png');
      case 'es':
        return require('../../../assets/img/google-play-badge-es.png');
      default:
        return '';
    }
  }
}
