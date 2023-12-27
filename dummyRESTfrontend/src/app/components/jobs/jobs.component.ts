import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getJobs().subscribe(data => {
      this.jobs = data;
    })
  }
}
