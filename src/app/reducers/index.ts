import { ActionReducerMap } from "@ngrx/store";
import * as fromMovies from './movies.reducer';

export interface AppState {
  movies: fromMovies.MoviesState
}

export const reducers: ActionReducerMap<AppState> = {
  movies: fromMovies.reducer
}
