import { Component, OnInit } from '@angular/core';
import { Locations } from '../locations';
import { LocationsService } from '../locations.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit{

  locations: Locations[] = [];
  constructor(private locationsService: LocationsService, private router: Router) { }
  ngOnInit(): void {
    this.getLocations();
  }
  goToTravelRequest() {
    this.router.navigate(['/new-travel-request']);
  }
  goToRequestStatus(){
    this.router.navigate(['/request-status']);
  }
  goToRequestList(){
    this.router.navigate(['/request-list']);
  }

  private getLocations(){
    this.locationsService.getLocations().subscribe(data=>{
      this.locations = data;
    });
  }
}
