import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { Job } from '../../models/job';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  jobsParam: string | null = "";
  jobs: Job[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // if (params.has('users')) {
      //   this.usersParam = params.get('users');
      //   this.jobsParam = null;

      //   this.http.get<User[]>("https://monacodelisa-node-express.onrender.com/dummy-rest-api/users").subscribe(data => {
      //     this.users = data;
      //   });
      // } else if (params.has('jobs')) {
      //   this.jobsParam = params.get('jobs');
      //   this.usersParam = null;

      //   this.http.get<Job[]>("https://monacodelisa-node-express.onrender.com/dummy-rest-api/jobs").subscribe(data => {
      //     this.jobs = data;
      //   });
      // } else {
      //   // Handle other cases or set default values if needed
      //   this.usersParam = null;
      //   this.jobsParam = null;
      // }
    });
  }
}
