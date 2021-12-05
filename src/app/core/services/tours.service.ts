import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITour } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  private url = environment.apiUrl + '/tours';
  constructor(private _http: HttpClient) { }

  /**
   * Get all tour
   */
  getAllTour(): Observable<ITour[]> {
    return this._http.get<ITour[]>(this.url);
  }

  /**
   * Get all tour
   */
  getTourById(id: string): Observable<ITour> {
    return this._http.get<ITour>(this.url, { params: { id: id } });
  }
}
