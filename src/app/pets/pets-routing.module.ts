import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PetDetailComponent } from './pet-detail/pet-detail.component';
// import { PetDetailResolve } from './pet-detail/pet-detail.resolve';
// import { PetDetailService } from './pet-detail/pet-detail.service';

const petsRoutes: Routes = [
  {
    path: 'pets/:type/:id',
    component: PetDetailComponent,
    /* resolve: {
      pet: PetDetailResolve
    } */
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(petsRoutes),
    CommonModule,
  ],
  exports: [
    RouterModule
  ],
  /* providers: [
    PetDetailService,
    PetDetailResolve,
  ] */
})
export class PetsRoutingModule { }
