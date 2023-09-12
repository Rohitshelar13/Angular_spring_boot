import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { TravelRequestsService } from '../travel-requests.service';
import { TravelRequest } from '../new-travel-request';
import { Locations } from '../locations';
import { LocationsService } from '../locations.service';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-travel-requests',
  templateUrl: './travel-requests.component.html',
  styleUrls: ['./travel-requests.component.css']
})
export class TravelRequestsComponent implements OnInit{
  travelRequestForm: FormGroup;
  user! : User;
  locations!: Locations[];

  constructor(
    private formBuilder: FormBuilder,
    private travelRequestsService: TravelRequestsService,
    private locationsService: LocationsService,
    private authService: AuthService
  ) {
    this.travelRequestForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      hrId: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      purposeOfTravel: ['', Validators.required], // Add the required validator
      priority: ['', Validators.required], // Add the required validator
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const userItem = localStorage.getItem('user');
  if (userItem) {
    this.user = JSON.parse(userItem);
    this.setDefaultFormValues();
  } else {
    console.log("user not found");
  }
  this.fetchLocations();
  }
  logout(): void {
    this.authService.logout();
  }

  fetchLocations(): void {
    this.locationsService.getLocations().subscribe(
      (locations: Locations[]) => {
        this.locations = locations;
      },
      (error) => {
        console.error('Failed to fetch locations:', error);
      }
    );
  }

  setDefaultFormValues(): void {
    if (this.user) {
      this.travelRequestForm.patchValue({
        employeeId: this.user.employeeId,
        hrId: this.user.hrId,
      });
    }
  }

  submitTravelRequest(): void {
    if (this.travelRequestForm.invalid) {
      return;
    }

    // const currentDate = new Date().toISOString().split('T')[0];
    const selectedLocationId = parseInt(this.travelRequestForm.value.location, 10);
    const selectedLocation = this.locations.find(location => location.id === selectedLocationId);
    const requestId = Math.floor(Math.random() * 9000000) + 1000000;
    let travelRequest: TravelRequest = {
      requestId : requestId,
      raisedByEmployeeId: this.travelRequestForm.value.employeeId,
      toBeApprovedByHRId: this.travelRequestForm.value.hrId,
      fromDate: new Date(this.travelRequestForm.value.fromDate),
      toDate: new Date(this.travelRequestForm.value.toDate),
      purposeOfTravel: this.travelRequestForm.value.purposeOfTravel,
      priority: this.travelRequestForm.value.priority,
      requestApprovedOn: null,
      // locations: selectedLocation ? selectedLocation : undefined,
      requestStatus: "New", // Assign null or leave it empty as per your requirements
    requestRaisedOn: new Date()

    };
    if (selectedLocation) {
      travelRequest = {
        ...travelRequest,
        locations: selectedLocation
      };
    }

    this.travelRequestsService.submitTravelRequest(travelRequest).subscribe(
      (response: any) => {
        // Handle successful submission response here
        const travelRequestId = response;
        alert('Travel request submitted successfully. Request ID: ' + travelRequestId);

        this.travelRequestForm.reset();
        const userItem = localStorage.getItem('user');
        if (userItem) {
          this.user = JSON.parse(userItem);
          this.setDefaultFormValues();
        }

      }
    );
  }
}
