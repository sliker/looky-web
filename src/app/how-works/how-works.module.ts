import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { HowWorksComponent } from './how-works.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    declarations: [
        HowWorksComponent
    ],
    exports: [
        HowWorksComponent
    ]
})
export class HowWorksModule {}
