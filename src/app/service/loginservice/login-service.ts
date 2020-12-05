import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Authorization} from '../../model/Authorization';
import {AuthorizationResponse} from '../../model/AuthorizationResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated = false;
  url = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  login(authorization: Authorization): Observable<AuthorizationResponse>{
    return this.httpClient.post<AuthorizationResponse>(this.url + '/login' , authorization);
  }
}
