export class FieldModel {
  fieldName: string;
  location: string;
  extentSize: number;
  fieldImage: File | null;

  constructor(
    fieldName: string,
    location: string,
    extentSize: number,
    fieldImage: File | null
  ) {
    this.fieldName = fieldName;
    this.location = location;
    this.extentSize = extentSize;
    this.fieldImage = fieldImage;
  }
}
