import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { NotificationService } from '../services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _notificationService: NotificationService) { }
  // TODO
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error.error.statusCode === 422) {
          for (const e of error.error.error.details) {
            this._notificationService.error(e.message, {autoClose: true});
          }
        }

        if (error.error.error.statusCode === 401) {
          this._notificationService.error(error.error.error.message, {autoClose: true});
        }
        return throwError(() => errorMessage);
      }),
    );
  }
}
