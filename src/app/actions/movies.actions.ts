import { createAction, props } from '@ngrx/store';
import { MovieEntity } from '../reducers/movies.reducer';


// initiator
export const loadMovies = createAction(
  '[app movies] load the movies'
);

// happy - success
export const loadMoviesSucceeded = createAction(
  '[app movies] loading the movies succeeded',
  props<{ payload: MovieEntity[] }>()
);
