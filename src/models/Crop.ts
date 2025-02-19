export class CropModel {
  commonName: string;
  scientificName: string;
  category: string;
  cropImage: File | null;
  fieldName: string;

  constructor(
    commonName: string,
    scientificName: string,
    category: string,
    cropImage: File | null,
    fieldName: string
  ) {
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.category = category;
    this.cropImage = cropImage;
    this.fieldName = fieldName;
  }
}
