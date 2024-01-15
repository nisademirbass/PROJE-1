import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('Jwt interceptor çalıştı...')

    let token = this.accountService.accessToken;

    if (token) {
      request = request.clone({
        headers:request.headers.set('Authorization',`Bearer ${token}`)
      });
    }

    return next.handle(request);
  
  }
}
