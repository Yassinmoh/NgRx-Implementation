import { createAction, props } from "@ngrx/store";
import { Task } from "../../modules/core/models/Task";

export const addTask = createAction('[Task] Add Task',props<{title:string,description:string}>())
export const deleteTask = createAction('[Task] Delete Task',props<{id:string}>())
export const updateTask = createAction('[Task] Update Task',props<{id:string,title:string,description:string}>())


export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccessfuly = createAction('[Task] Load Tasks Successfuly',props<{tasks:Task[]}>());
export const loadTasksFailure = createAction('[Task] Load Tasks Failure',props<{error:string}>());

