import { createReducer, on } from "@ngrx/store"
import { Task } from "../../modules/core/models/Task"
import * as taskActions from './task.actions'

export interface AppState {
    tasks:Task[],
    error:string | null
}

const initState:AppState = {
    tasks:[],
    error:null

}

export const taskReducer = createReducer(initState,
  on(taskActions.loadTasksSuccessfuly,state =>{
    return{
      ...state,
      tasks:[...state.tasks]
    }
  }),

  on(taskActions.addTask,(state:AppState,action)=>{
    return {
      ...state,
      tasks:{...state.tasks,title:action.title,description:action.description,complated:false,id:new Date().toISOString()}
    }
  }),
  on(taskActions.updateTask, (state, { id, title, description }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, title, description } : task
    ),
  })),
  on(taskActions.deleteTask,(state,{id}) =>{
    return{
      ...state,
      tasks: state.tasks.filter (task => task.id != id)
    }
  }),
  on(taskActions.loadTasksFailure,(state ,{error})=>{
    return {
      ...state,
      error
    }
  })  
)