import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMember, IMemberLogin, JWTProfile, LoginResponse } from '../models';

import _jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl + '/members';
  profile: JWTProfile = { id: '', name: '', iat: 0, exp: 0, roles: [] };
  constructor(private http: HttpClient, private _router: Router) { }

  /**
   * login
   *
   * @param member
   * @returns
   */
  login(member: IMemberLogin): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url + '/login', member);
  }

  /**
 * Check expired
 * @returns boolen
 */
  isAuthenticated(): boolean {
    const token = localStorage.getItem('NATOUR');

    if (!token) {
      return false;
    }

    const decoded: JWTProfile = _jwtDecode(token);

    if (!decoded) {
      return false;
    }

    if (Date.now() >= (decoded.exp * 1000)) {
      return false;
    }

    this.profile = decoded;
    return true;
  }


  /**
   * Logout
   */
  logout(): void {
    localStorage.removeItem('NATOUR');
    this._router.navigateByUrl('/login');
  }

}
