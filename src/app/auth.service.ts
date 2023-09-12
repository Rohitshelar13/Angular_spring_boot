import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInFlag: boolean = false;

  constructor() {}

  isLoggedIn(): boolean {
    return this.isLoggedInFlag;
  }

  login(): void {
    this.isLoggedInFlag = true;
    // Perform any other login-related logic
  }

  logout(): void {
    this.isLoggedInFlag = false;
    localStorage.removeItem('user');
    // Perform any other logout-related logic, such as clearing user data
  }
}
