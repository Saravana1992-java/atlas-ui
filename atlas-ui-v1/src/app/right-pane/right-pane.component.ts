import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  standalone: true,
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css']
})
export class RightPaneComponent implements OnInit {
  ngOnInit(): void {
    const map = L.map('map').setView([9.512, 77.634], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }
}
