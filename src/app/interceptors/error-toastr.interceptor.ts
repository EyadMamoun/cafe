// error.interceptor.ts
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message: string;

      if (error.status === 0) {
        message = 'Cannot reach the server. Check your connection.';
      } else if (error.status >= 500) {
        message = 'Something went wrong on our side. Please try again later.';
      } else {
        message = error.error?.err ?? 'Something went wrong.';
      }

      toastr.error(message);
      return throwError(() => error); // let the component's error callback still run
    }),
  );
};
