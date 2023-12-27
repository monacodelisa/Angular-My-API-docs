import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLocations().subscribe(data => {
      this.locations = data;
    })
  }
}
