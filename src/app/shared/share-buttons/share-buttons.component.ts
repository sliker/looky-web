import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { facebookAppID, lookyWebUrl } from '../../constants';

@Component({
  selector: 'looky-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.scss']
})
export class ShareButtonsComponent {
  @Input() caption: string;
  urlToShare: string;

  private platformId: Object;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;

    if (isPlatformBrowser(this.platformId)) {
      this.urlToShare = (window) ? window.location.href : lookyWebUrl;
    }
  }

  shareOnFacebook() {
    if (FB) {
      FB.ui({
        method: 'feed',
        app_id: facebookAppID,
        link: this.urlToShare,
        caption: this.caption
      }, () => {
        // callback
      });
    }
  }
}
