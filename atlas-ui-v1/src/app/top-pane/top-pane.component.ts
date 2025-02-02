import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from '../map.service';
import { LogService } from '../log.service';

@Component({
  standalone: true,
  selector: 'app-top-pane',
  imports: [CommonModule],
  templateUrl: './top-pane.component.html',
  styleUrl: './top-pane.component.css',
  providers: [MapService, LogService]
})
export class TopPaneComponent implements OnInit {
  lat = 0;
  lng = 0;
  address = '';

  constructor(
    private mapService: MapService,
    private logService: LogService
  ) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.mapService.reverseGeocode(this.lat, this.lng).subscribe(
          response => {
            const town = response.address.town;
            this.address = JSON.stringify(town);
          },
          error => {
            this.logService.log('error', 'Error in reverseGeocode service', error);
          }
        );
      }, (error) => {
        console.error('Error getting location', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
