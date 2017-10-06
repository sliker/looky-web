import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Pet } from '../shared/pet.model';
import { PetDetailService } from './pet-detail.service';

@Injectable()
export class PetDetailResolve implements Resolve<Pet> {
  private petDetailService: PetDetailService;

  constructor(petDetailService: PetDetailService) {
    this.petDetailService = petDetailService;
  }

  resolve(route: ActivatedRouteSnapshot) {
    const params = route.params;
    return this.petDetailService.getPet(params['type'], params['id']);
  }
}
