import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HowWorksModule } from '../how-works/how-works.module';
import { DownloadCtaModule } from '../download-cta/download-cta.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        SharedModule,
        CoreModule,
        HowWorksModule,
        DownloadCtaModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
