import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const TOKEN = 'e51b3039d324cce18946eec27fa8d9924c5ddcb5';

    request = request.clone({
      setHeaders: { Authorization: 'Bearer ' + TOKEN },
    });
    return next.handle(request);
  }
}
