import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { taskReducer } from './Tasks/task.reducer';

export interface State {
  App:any
}

export const reducers: ActionReducerMap<State> = {
  App:taskReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
