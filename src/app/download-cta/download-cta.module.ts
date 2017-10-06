import { NgModule } from '@angular/core';


import { DownloadCtaComponent } from './download-cta.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        DownloadCtaComponent
    ],
    exports: [
        DownloadCtaComponent
    ]
})
export class DownloadCtaModule {}
