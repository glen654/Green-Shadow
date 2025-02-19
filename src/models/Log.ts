export class LogModel {
  logName: string;
  logDate: Date;
  logImage: File | null;
  fieldName: string;
  cropName: string;
  staffMember: string;

  constructor(
    logName: string,
    logDate: Date,
    logImage: File |null,
    fieldName: string,
    cropName: string,
    staffMember: string
  ) {
    this.logName = logName;
    this.logDate = logDate;
    this.logImage = logImage;
    this.fieldName = fieldName;
    this.cropName = cropName;
    this.staffMember = staffMember;
  }
}
