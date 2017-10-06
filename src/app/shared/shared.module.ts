import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { LoadingComponent } from './loading/loading.component';
import { GetAppButtonComponent } from './get-app-button/get-app-button.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { DividerCopyComponent } from './divider-copy/divider-copy.component';
import { ShareButtonsComponent } from './share-buttons/share-buttons.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    LoadingComponent,
    GetAppButtonComponent,
    SocialLinksComponent,
    DividerCopyComponent,
    ShareButtonsComponent,
  ],
  exports: [
    TranslateModule,
    LoadingComponent,
    GetAppButtonComponent,
    SocialLinksComponent,
    DividerCopyComponent,
    ShareButtonsComponent,
  ]
})
export class SharedModule {
}
