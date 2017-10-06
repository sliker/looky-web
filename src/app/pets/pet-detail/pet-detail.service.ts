import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { api } from '../../constants';
import { Pet } from '../shared/pet.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PetDetailService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getPet(petType: string, petKey: string): Observable<Pet> {
    return this.http.get(`${api}/getPet?petType=${petType}&petKey=${petKey}`);
  }
}
