import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { CookiesComponent } from './cookies/cookies.component';

export const legalRoutes: Routes = [
    { path: 'legal/privacy', component: PrivacyComponent },
    { path: 'legal/terms', component: TermsComponent },
    { path: 'legal/cookies', component: CookiesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(legalRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LegalRoutingModule { }
