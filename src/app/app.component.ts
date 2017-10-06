import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './shared/language.service';

@Component({
  selector: 'looky-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private translate: TranslateService;
  private router: Router;
  private platformId: Object;
  private languageService: LanguageService;

  constructor(router: Router, translate: TranslateService, @Inject(PLATFORM_ID) platformId: Object, languageService: LanguageService) {
    this.translate = translate;
    this.router = router;
    this.platformId = platformId;
    this.languageService = languageService;

    const lang = 'es';
    translate.setDefaultLang(lang);

    if (isPlatformBrowser(this.platformId)) {
      // TODO: Refactor this, check https://github.com/angular/angular/issues/10929
      this.router.events.subscribe(() => {
        window.scrollTo(0, 0);
      });
    }

    translate.use(this.languageService.getLang());
  }
}
