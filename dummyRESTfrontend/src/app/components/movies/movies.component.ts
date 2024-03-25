import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movie } from '../../models/movie';
import { CopyEndpointUrlService } from '../../services/copy-endpoint-url.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  private apiService = inject(ApiService);
  private copyService = inject(CopyEndpointUrlService);

  ngOnInit(): void {
    this.apiService.getMovies().subscribe(data => {
      this.movies = data;
    })
  }

  copyUrl(): void {
    this.copyService.copyText();
  }
}
