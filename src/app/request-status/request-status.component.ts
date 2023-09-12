import { Component } from '@angular/core';
import { TravelRequest } from '../new-travel-request';
import { TravelRequestsService } from '../travel-requests.service';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent {
  travelRequestId!: number;
  travelRequest!: TravelRequest;

  constructor(private travelRequestsService: TravelRequestsService) { }

  getRequestStatus(): void {
    this.travelRequestsService.getTravelRequestById(this.travelRequestId).subscribe(
      (travelRequest: TravelRequest) => {
        this.travelRequest = travelRequest;
      },
      (error) => {
        console.error('Failed to fetch travel request:', error);
      }
    );
  }
}
