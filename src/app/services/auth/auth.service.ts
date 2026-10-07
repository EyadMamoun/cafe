import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogInBody, UserLogInResponse } from '../../types/user.type';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private LoggedInSubject = new BehaviorSubject<boolean>(
    !!localStorage.getItem(this.TOKEN_KEY),
  );
  readonly isLoggedIn$ = this.LoggedInSubject.asObservable();

  constructor(private readonly _http: HttpClient) {}

  login(userBody: UserLogInBody): Observable<UserLogInResponse> {
    return this._http
      .post<UserLogInResponse>(
        'https://second-cup-backend.vercel.app/api/auth/signin',
        userBody,
      )
      .pipe(
        map((response: UserLogInResponse) => response),
        catchError((err) => throwError(() => err)),
      );
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token); // The more secure production approach is an httpOnly cookie set by the backend, which JavaScript can't read.
    this.LoggedInSubject.next(true);
  }

  isTokenExists(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) ? true : false;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.LoggedInSubject.next(false);
  }
}
