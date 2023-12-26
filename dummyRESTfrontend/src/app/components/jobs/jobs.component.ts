import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Job[]>("https://monacodelisa-node-express.onrender.com/dummy-rest-api/jobs").subscribe(data => {
      this.jobs = data;
    })
  }

}
