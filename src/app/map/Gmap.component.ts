import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input() address: string='Pune';
  @ViewChild('mapContainer') mapContainer!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    if(this.address || this.mapContainer)
    {
    this.initMap();
    }
    
  }

  private initMap(): void {
    const mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(0, 0), // Default center
    };
    const map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    this.geocodeAddress(map);
  }

  private geocodeAddress(map: any): void {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': this.address }, (results: any, status: any) => {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  }
}