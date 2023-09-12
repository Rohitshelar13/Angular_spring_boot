import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  login(employeeId: number, password: string): Observable<User> {
    const url = `${this.baseUrl}/login`;
    const body = { employeeId, password };
    return this.http.post<User>(url, body);
  }
  getUserDetails(employeeId: number): Observable<User> {
    const url = `${this.baseUrl}/users/${employeeId}`;
    return this.http.get<User>(url);
  }
}
