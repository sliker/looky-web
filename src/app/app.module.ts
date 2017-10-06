import { BrowserModule, Title } from '@angular/platform-browser';
import { Inject, LOCALE_ID, NgModule, PLATFORM_ID } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UniversalTranslateLoader } from '@ngx-universal/translate-loader';

import { AppComponent } from './app.component';
import { NotFoundModule } from './not-found/not-found.module';
import { CoreModule } from './core/core.module';
import { LegalModule } from './legal/legal.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { PetsModule } from './pets/pets.module';
import { AppRoutingModule } from './app-routing.module';
import { LanguageService } from './shared/language.service';


// AoT requires an exported function for factories
export function createTranslateLoader(platformId: any, http: HttpClient): TranslateLoader {
  const browserLoader = new TranslateHttpLoader(http);
  return new UniversalTranslateLoader(platformId, browserLoader, 'assets/i18n', '.json');
}

export function setLocale(languageService: LanguageService) {
  return languageService.getLang();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'looky'}),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [PLATFORM_ID, HttpClient]
      }
    }),
    AboutUsModule,
    CoreModule,
    LegalModule,
    HomeModule,
    NotFoundModule,
    PetsModule,
    AppRoutingModule,
  ],
  providers: [
    Title,
    LanguageService,
    {
      provide: LOCALE_ID,
      deps: [LanguageService],
      useFactory: setLocale
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
}
