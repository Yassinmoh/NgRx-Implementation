import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./task.reducer";


const appFetureSelector = createFeatureSelector<AppState>('App')

export const getAllTasks = createSelector(appFetureSelector , state => state.tasks)
export const getComplatedTasks = createSelector(appFetureSelector , state => state.tasks.filter(task => task.completed))
export const getPenddingTasks = createSelector(appFetureSelector , state => state.tasks.filter(task => !task.completed))