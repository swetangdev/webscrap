import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from '../services/loading/loading.service';
import { appConfig } from 'src/app/app.config';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private _loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._loadingService.toggleLoader(true);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        setTimeout(() => {
          this._loadingService.toggleLoader(false);
        }, appConfig.interceptorTimeout);
        return throwError(() => error);
      }),
      finalize(() => {
        setTimeout(() => {
          this._loadingService.toggleLoader(false);
        }, appConfig.interceptorTimeout);
      })
    );
  }
}
