import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private _httpClient: HttpClient) { }

  public getWeather(): Observable<any> {
    return this._httpClient.get(`https://swapi.dev/api/people/1`)
  }
}
