export class CropModel {
  commonName: string;
  scientificName: string;
  category: string;
  cropImage: string;
  fieldName: string;

  constructor(
    commonName: string,
    scientificName: string,
    category: string,
    cropImage: string,
    fieldName: string
  ) {
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.category = category;
    this.cropImage = cropImage;
    this.fieldName = fieldName;
  }
}
