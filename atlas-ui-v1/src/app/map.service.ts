import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LogService } from './log.service';
import { ReverseGeocodeResponse } from './models/reverse-geocode-response';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private apiUrl = 'https://nominatim.openstreetmap.org/reverse?format=json';

  constructor(
    private http: HttpClient,
    private logService: LogService
  ) { }

  reverseGeocode(lat: number, lon: number): Observable<ReverseGeocodeResponse> {
    const url = `${this.apiUrl}&lat=${lat}&lon=${lon}`;
    this.logService.log('debug', 'Finding GeoCode for url: ', url);
    return this.http.get<ReverseGeocodeResponse>(url).pipe(
      map(response => {
        // Handle the successful response here
        this.logService.log('debug', 'response: ', JSON.stringify(response));
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        // Handle the error response here
        console.error('Error retrieving address', error);
        return throwError(error);
      })
    );
  }
}
