// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         let errorMessage = '';
//         if (error.error instanceof ErrorEvent) {
//           // Error del lado del cliente
//           errorMessage = `Error: ${error.error.message}`;
//         } else {
//           // Error del lado del servidor
//           switch (error.status) {
//             case 404:
//               errorMessage = `Error 404: No encontrado - ${error.message}`;
//               break;
//             case 500:
//               errorMessage = `Error 500: Error en el servidor - ${error.message}`;
//               break;
//             default:
//               errorMessage = `Error ${error.status}: ${error.message}`;
//           }
//         }
//         // Mostrar el error en la consola (o mostrar un mensaje al usuario)
//         console.error(errorMessage);
//         return throwError(() => new Error(errorMessage));
//       })
//     );
//   }
// }
