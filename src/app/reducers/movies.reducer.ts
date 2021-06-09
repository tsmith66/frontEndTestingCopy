import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/movies.actions';
export interface MovieEntity {
  id: string;
  title: string;
  director: string;
  yearReleased?: number
}

export interface MoviesState extends EntityState<MovieEntity> {

}

export const adapter = createEntityAdapter<MovieEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadMoviesSucceeded, (currentState, action) => adapter.setAll(action.payload, currentState))
);

export function reducer(state: MoviesState = initialState, action: Action): MoviesState {
  return reducerFunction(state, action);
}



