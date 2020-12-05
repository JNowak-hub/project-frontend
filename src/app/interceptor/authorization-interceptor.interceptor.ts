import
{ Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authorizationHeader = localStorage.getItem('authorizationHeader');
    if (authorizationHeader !== null) {
      if (!request.url.includes('/public/')) {
        request = request.clone({
          setHeaders: {
            Authorization: authorizationHeader
          }
        });
      }
    }
    return next.handle(request);
  }
}
