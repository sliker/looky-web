import { NgModule } from '@angular/core';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';

@NgModule({
    imports: [
        AboutUsRoutingModule
    ],
    exports: [
        AboutUsComponent
    ],
    declarations: [
        AboutUsComponent
    ]
})
export class AboutUsModule { }
