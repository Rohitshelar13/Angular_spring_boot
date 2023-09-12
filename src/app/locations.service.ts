import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locations } from './locations';
@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private baseURL = "http://localhost:8080/locations/getloc";
  constructor(private httpClient: HttpClient) { }

  getLocations(): Observable<Locations[]>{
    return this.httpClient.get<Locations[]>(`${this.baseURL}`);
  }
}
