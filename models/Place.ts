export class Place {
  title: string
  imageUri: string
  address: string
  location: { lat: number; lng: number }
  id: string

  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: { lat: number; lng: number }
  ) {
    this.title = title
    this.imageUri = imageUri
    this.address = address
    this.location = location // {lat: number; lng: number}
    this.id = new DataTransfer().toString() + Math.random().toString()
  }
}
