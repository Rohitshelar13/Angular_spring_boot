import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LoginComponent } from './login/login.component';
import { TravelRequestsComponent } from './travel-requests/travel-requests.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'locations', component: LocationsListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'request-status', component: RequestStatusComponent},
  {path: 'new-travel-request', component: TravelRequestsComponent, canActivate: [AuthGuard]},
  {path: 'request-list', component: RequestListComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'locations', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
