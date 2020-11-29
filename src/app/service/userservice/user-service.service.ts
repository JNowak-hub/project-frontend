import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/User';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = environment.baseUrl + '';

  constructor(private httpClient: HttpClient) { }

  public createNewUser(user: User): Observable<User> {
      return this.httpClient.post<User>(this.url, user);
  }
}
