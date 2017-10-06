import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { SectionHeaderComponent } from './section-header/section-header';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    FooterComponent,
    MainNavComponent,
    HeroComponent,
    SectionHeaderComponent
  ],
  exports: [
    TranslateModule,
    FooterComponent,
    MainNavComponent,
    HeroComponent,
    SectionHeaderComponent
  ]
})
export class CoreModule {
}
