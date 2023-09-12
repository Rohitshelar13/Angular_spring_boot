import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  user: User = {} as User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const loggedInUser = JSON.parse(userJson);
      const employeeId = loggedInUser.employeeId;
      this.getUserDetails(employeeId);
    }
  }

  getUserDetails(employeeId: number): void {
    this.userService.getUserDetails(employeeId).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Failed to retrieve user details:', error);
        // Handle the error as needed
      }
    );
  }

  login(employeeId: number, password: string): void {
    this.userService.login(employeeId, password).subscribe(
      (response: any) => {
        // Handle successful login response here
        console.log('Login successful', response);
      },
      (error: any) => {
        // Handle login error here
        console.log('Login failed', error);
      }
    );
  }
}
