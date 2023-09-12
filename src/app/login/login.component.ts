import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
  
    const employeeId = this.loginForm.value.employeeId;
    const password = this.loginForm.value.password;
  
    this.userService.login(employeeId, password).subscribe(
      (user: User) => {
        // Login successful
        // Set any necessary data or perform actions
        // For example, you can save the user details to local storage
        console.log('User:', user);
        
        localStorage.setItem('user', JSON.stringify(user));
        this.authService.login();
        // Navigate to the NewTravelRequestComponent or any other component
          // Navigate to the appropriate component based on the user role
          if (user.role.roleName === 'HR') {
            this.router.navigate(['/request-list']);
          } else {
            this.router.navigate(['/new-travel-request']);
          }
        },
      (error) => {
        // Login failed
        console.error('Login failed:', error);
        // Handle the error as needed
      }
    );
  }
}
