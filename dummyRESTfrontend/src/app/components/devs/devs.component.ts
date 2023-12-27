import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Dev } from '../../models/dev';

@Component({
  selector: 'app-devs',
  standalone: true,
  imports: [],
  templateUrl: './devs.component.html',
  styleUrl: './devs.component.scss'
})
export class DevsComponent implements OnInit {
  developers: Dev[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDevs().subscribe(data => {
      this.developers = data;
    })
  }
}
