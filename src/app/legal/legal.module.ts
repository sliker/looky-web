import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LegalRoutingModule } from './legal-routing.module';
import { CoreModule } from '../core/core.module';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { CookiesComponent } from './cookies/cookies.component';

@NgModule({
    imports: [
        RouterModule,
        CoreModule,
        LegalRoutingModule
    ],
    declarations: [
        PrivacyComponent,
        TermsComponent,
        CookiesComponent
    ],
    exports: [
        PrivacyComponent,
        TermsComponent,
        CookiesComponent
    ]
})
export class LegalModule { }
