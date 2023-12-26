import { Component, OnInit } from '@angular/core';

import { Dev } from '../../models/dev';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devs',
  standalone: true,
  imports: [],
  templateUrl: './devs.component.html',
  styleUrl: './devs.component.scss'
})
export class DevsComponent implements OnInit {
  developers: Dev[] = [];

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Dev[]>("https://monacodelisa-node-express.onrender.com/dummy-rest-api/devs").subscribe(data => {
      this.developers = data;
    })
  }
}
