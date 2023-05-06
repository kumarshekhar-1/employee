import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
   
          return this.auth.user.pipe(
            take(1),
            exhaustMap(user => {
                if(!user){
                    return next.handle(req)
                       }
                       const token=user.token
                       const req1 = req.clone({
                        headers: req.headers.set('Authorization', `Bearer ${token}`),
                      });
                return next.handle(req1)
            }))}
        
  }

