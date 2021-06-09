import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";

import * as appActions from '../actions/app.actions';
import * as movieActions from '../actions/movies.actions';

@Injectable()
export class AppEffects {

  // applicationStarted => loadMovies
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => movieActions.loadMovies())
    )
  );


  constructor(private actions$: Actions) { }
}
