import { Component, inject, OnInit } from '@angular/core';
import { Location } from '../../models/location';
import { ApiService } from '../../services/api.service';
import { CopyEndpointUrlService } from '../../services/copy-endpoint-url.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];
  private apiService = inject(ApiService);
  private copyService = inject(CopyEndpointUrlService);

  ngOnInit(): void {
    this.apiService.getLocations().subscribe(data => {
      this.locations = data;
    })
  }

  copyUrl(): void {
    this.copyService.copyText();
  }
}
