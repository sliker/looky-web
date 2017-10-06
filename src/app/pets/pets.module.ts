import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NotFoundModule } from '../not-found/not-found.module';
import { DownloadCtaModule } from '../download-cta/download-cta.module';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetDetailHeaderComponent } from './pet-detail/pet-detail-header/pet-detail-header.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NotFoundModule,
    DownloadCtaModule,
    PetsRoutingModule
  ],
  declarations: [
    PetDetailComponent,
    PetDetailHeaderComponent
  ],
  exports: [
    PetDetailComponent,
    PetDetailHeaderComponent
  ],
})
export class PetsModule { }
