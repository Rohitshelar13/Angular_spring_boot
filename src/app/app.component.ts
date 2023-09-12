import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';
  constructor(private authService: AuthService,
    private router: Router
    ) {}

isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
}
}
