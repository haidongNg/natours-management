import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMemberLogin } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl + '/members';
  constructor(private http: HttpClient) { }

  login(member: IMemberLogin):Observable<void> {
    return this.http.post<void>(this.url + '/login', member);
  }
}
