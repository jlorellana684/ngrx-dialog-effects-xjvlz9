import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  ActionReducer,
} from '@ngrx/store';
import { routerReducer, RouterReducerState} from '@ngrx/router-store';
import { environment } from '../../environments/environment';

import * as User from './user.reducer';
import * as Animal from './animal.reducer';

export interface State {
  user: User.State;
  animal: Animal.State;
}

export const reducers: ActionReducerMap<State> = {
  user: User.reducer,
  animal: Animal.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export const getUserState = createFeatureSelector<User.State>('user');
export const getAnimalState = createFeatureSelector<Animal.State>('animal');

export const getUserName = createSelector(
  getUserState,
  User.getUserName
);

export const getAnimalName = createSelector(
  getAnimalState,
  Animal.getAnimal
);