import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Dev } from '../../models/dev';
import { CopyEndpointUrlService } from '../../services/copy-endpoint-url.service';

@Component({
  selector: 'app-devs',
  standalone: true,
  imports: [],
  templateUrl: './devs.component.html',
  styleUrl: './devs.component.scss'
})
export class DevsComponent implements OnInit {
  developers: Dev[] = [];
  private apiService = inject(ApiService);
  private copyService = inject(CopyEndpointUrlService);

  ngOnInit(): void {
    this.apiService.getDevs().subscribe(data => {
      this.developers = data;
    })
  }

  copyUrl(): void {
    this.copyService.copyText();
  }
}
