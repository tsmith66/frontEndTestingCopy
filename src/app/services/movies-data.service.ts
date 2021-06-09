
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieListItem } from '../../models';
import { environment } from '../../environments/environment'; // ONLY IMPORT THIS ONE!
import { filter, map } from 'rxjs/operators';
@Injectable()
export class MoviesDataService {
  readonly url = environment.apiUrl + 'movies';

  constructor(private client: HttpClient) {

  }

  getAll(): Observable<MovieListItem[]> {
    return this.client.get<{ data: MovieListItem[] }>(this.url)
      .pipe(
        map(response => response.data),
      )

  }
}
