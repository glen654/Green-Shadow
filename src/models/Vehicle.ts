import { FuelType } from "./enums/FuelType";
import { Status } from "./enums/StatusType";

export class VehicleModel {
  licensePlateNumber: string;
  category: string;
  fuelType: FuelType;
  status: Status;
  remarks: string;
  staffMember: string;

  constructor(
    licensePlateNumber: string,
    category: string,
    fuelType: FuelType,
    status: Status,
    remarks: string,
    staffMember: string
  ) {
    this.licensePlateNumber = licensePlateNumber;
    this.category = category;
    this.fuelType = fuelType;
    this.status = status;
    this.remarks = remarks;
    this.staffMember = staffMember;
  }
}
