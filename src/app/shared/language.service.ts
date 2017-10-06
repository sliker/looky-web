import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {
  private lang: string;
  private injector: Injector;
  private translate: TranslateService;
  private readonly platformId;

  constructor(injector: Injector, @Inject(PLATFORM_ID) platformId: Object, translate: TranslateService) {
    this.lang = 'es';
    this.translate = translate;
    this.injector = injector;
    this.platformId = platformId;

    if (isPlatformBrowser(this.platformId)) {
      const browserLang: string = this.translate.getBrowserLang();
      this.lang = browserLang.match(/en|es/) ? browserLang : 'en';
    }

    if (isPlatformServer(this.platformId)) {
      try {
        this.lang = this.injector.get('request').headers['accept-language'].split(',')[ 0 ].split(';')[ 0 ];
        this.lang = this.lang.match(/en|es/) ? this.lang.substr(0, 2) : 'es';
      } catch (error) {
        this.lang = 'es';
        console.error(error);
      }
    }
  }

  getLang(): string {
    return this.lang;
  }
}
