import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const baseUrl = 'http://api.openweathermap.org/data/2.5/';
const APPID_HEADER = 'e819ae1d5c951c736e001118ed1e26d2';
const resource = 'weather';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  constructor(private httpClient: HttpClient) { }

  private static handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(
      'Error - Unable to retrieve Weather Condition for Specified City.');
  }

  public getWeatherAtCity(city: string, country: string): Observable<unknown> {
    const params = new HttpParams().set('q', city + ',' + country).set('appid', APPID_HEADER);
    const options = {params, responseType: 'json' as const};
    return this.httpClient.get(baseUrl + resource, options).pipe(
      catchError(OpenWeatherService.handleError)
    );
  }
}

