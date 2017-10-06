import { NgModule } from '@angular/core';


import { NotFoundComponent } from './not-found.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [
        NotFoundComponent
    ]
})
export class NotFoundModule { }
