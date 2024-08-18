import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { appReducer } from './Tasks/task.reducer';

export interface State {
  App:any
}

export const reducers: ActionReducerMap<State> = {
  App:appReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
