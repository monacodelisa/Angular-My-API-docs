import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  usersParam: string | null = "";
  users: User[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.usersParam = params.get('users');
      if (this.usersParam) {
        this.http.get<User[]>("https://monacodelisa-node-express.onrender.com/dummy-rest-api/users").subscribe(data => {
          this.users = data;
        })
      }
    });
  }
}
