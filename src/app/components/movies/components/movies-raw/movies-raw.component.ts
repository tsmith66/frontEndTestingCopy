import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MoviesDataService } from 'src/app/services/movies-data.service';

import { MovieListItem } from 'src/models';

@Component({
  selector: 'app-movies-raw',
  templateUrl: './movies-raw.component.html',
  styleUrls: ['./movies-raw.component.css']
})
export class MoviesRawComponent implements OnInit {

  hasError = false;
  movies$!: Observable<MovieListItem[]>;
  constructor(private service: MoviesDataService) { }

  ngOnInit(): void {
    this.movies$ = this.service.getAll().pipe(
      catchError(err => {
        this.hasError = true;
        throw err;
      })

    )
  }

}
