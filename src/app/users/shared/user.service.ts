import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { api } from '../../constants';
import { User } from './user.model';

@Injectable()
export class UserService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getUser(userId: string): Observable<User> {
    return this.http.get(`${api}/getUser?userId=${userId}`);
  }
}
