import { Locations } from "./locations";


export class TravelRequest {
  requestId: number;
  raisedByEmployeeId: number;
  toBeApprovedByHRId: number;
  requestRaisedOn: Date;
  fromDate: Date;
  toDate: Date;
  purposeOfTravel: string;
  locations?: Locations | null;
  requestStatus: string;
  requestApprovedOn: Date | null;
  priority: string;

  constructor(
    requestId: number,
    raisedByEmployeeId: number,
    toBeApprovedByHRId: number,
    requestRaisedOn: Date,
    fromDate: Date,
    toDate: Date,
    purposeOfTravel: string,
    locations: Locations,
    requestStatus: string,
    requestApprovedOn: Date,
    priority: string
  ) {
    this.requestId = requestId,
    this.raisedByEmployeeId = raisedByEmployeeId;
    this.toBeApprovedByHRId = toBeApprovedByHRId;
    this.requestRaisedOn = requestRaisedOn;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.purposeOfTravel = purposeOfTravel;
    this.locations = locations;
    this.requestStatus = requestStatus;
    this.requestApprovedOn = requestApprovedOn;
    this.priority = priority;
  }
}

