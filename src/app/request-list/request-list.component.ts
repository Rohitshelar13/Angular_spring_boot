import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelRequestsService } from '../travel-requests.service';
import { TravelRequest } from '../new-travel-request';
import { User } from '../user';
@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit{
  travelRequests: TravelRequest[] = [];
  employeeId!: number;
  constructor(private router: Router, private travelRequestsService: TravelRequestsService) {}

  ngOnInit(): void {
    // Fetch new travel requests for the HR (replace with your implementation)
    const userItem = localStorage.getItem('user');
    if (userItem) {
      const user = JSON.parse(userItem);
      this.employeeId = user.employeeId; // Set the employeeId property from the logged-in user
      this.fetchNewTravelRequestsForHR();
    } else {
      console.log('User not found');
    }
  }

  fetchNewTravelRequestsForHR(): void {
    // Call the service method to fetch new travel requests for HR
    
      // Call the service method to fetch new travel requests for HR using the employeeId
    this.travelRequestsService.getNewTravelRequests(this.employeeId).subscribe(
      (requests: TravelRequest[]) => {
        this.travelRequests = requests;
      },
      (error) => {
        console.error('Failed to fetch new travel requests:', error);
      }
    );
  
  }

  approveRequest(requestId: number): void {
    // Call the service method to approve the travel request
    this.travelRequestsService.approveTravelRequest(requestId, this.employeeId).subscribe(
      (response: any) => {
        // Redirect to travel request details component passing the request ID as a route parameter
        const travelRequestId = response;
        alert('Travel request approved successfully. Request ID: ' + travelRequestId);
        this.fetchNewTravelRequestsForHR();
      },
      (error) => {
        console.error('Failed to approve travel request:', error);
      }
    );
  }

  rejectRequest(requestId: number): void {
    // Call the service method to reject the travel request
    this.travelRequestsService.rejectTravelRequest(requestId).subscribe(
      (response: any) => {
        // Refresh the new travel requests list after rejection
        const travelRequestId = response;
        alert('Travel request rejected successfully. Request ID: ' + travelRequestId);
        this.fetchNewTravelRequestsForHR();
      },
      (error) => {
        console.error('Failed to reject travel request:', error);
      }
    );
  }
}
