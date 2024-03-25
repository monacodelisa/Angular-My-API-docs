import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ApiService } from '../../services/api.service';
import { CopyEndpointUrlService } from '../../services/copy-endpoint-url.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  urlCopied: boolean = false;
  private apiService = inject(ApiService);
  private copyService = inject(CopyEndpointUrlService);

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  copyUrl(): void {
    this.copyService.copyText();
  }
}
