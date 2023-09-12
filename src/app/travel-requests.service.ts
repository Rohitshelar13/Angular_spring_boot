import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelRequest } from './new-travel-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TravelRequestsService {
  private apiUrl = 'http://localhost:8080/travelRequests';

  constructor(private http: HttpClient) { }

  submitTravelRequest(travelRequest: TravelRequest): Observable<any> {
    const url = `${this.apiUrl}/addTravel`;
    return this.http.post(url, travelRequest);
  }

  getNewTravelRequests(hrId: number): Observable<TravelRequest[]> {
    const url = `${this.apiUrl}/pending-requests/${hrId}`;
    return this.http.get<TravelRequest[]>(url);
  }

  approveTravelRequest(requestId: number, hrId: number): Observable<any> {
    const url = `${this.apiUrl}/${requestId}/approve?hrId=${hrId}`;
    return this.http.put(url, null);
  }

  rejectTravelRequest(requestId: number): Observable<any> {
    const url = `${this.apiUrl}/${requestId}/reject`;
    return this.http.put(url, null);
  }

  getTravelRequestById(requestId: number): Observable<TravelRequest> {
    const url = `${this.apiUrl}/${requestId}`;
    return this.http.get<TravelRequest>(url);
  }
}
