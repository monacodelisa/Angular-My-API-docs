import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Job } from '../../models/job';
import { CopyEndpointUrlService } from '../../services/copy-endpoint-url.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  private apiService = inject(ApiService);
  private copyService = inject(CopyEndpointUrlService);

  ngOnInit(): void {
    this.apiService.getJobs().subscribe(data => {
      this.jobs = data;
    })
  }

  copyUrl(): void {
    this.copyService.copyText();
  }
}
