import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MoviesDataService } from "../services/movies-data.service";

import * as actions from '../actions/movies.actions';
import { map, switchMap, tap } from "rxjs/operators";

@Injectable()
export class MoviesEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMovies),
      switchMap(() => this.service.getAll()
        .pipe(
          tap(movies => console.log(movies)), // movie[] => movie[]
          map(movies => actions.loadMoviesSucceeded({ payload: movies })) // movie[] => action loadMoviesSucceeded
        )
      )
    )
  )

  constructor(private actions$: Actions, private service: MoviesDataService) { }
}
