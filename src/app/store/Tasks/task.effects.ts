import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as taskActions from './task.actions'
import { Task } from "../../modules/core/models/Task";

@Injectable()
export class TasksEffects {

    actions$ = inject(Actions)
    http = inject(HttpClient)

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(taskActions.loadTasks),
            mergeMap(() =>
                this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos').pipe(
                    map(tasks => taskActions.loadTasksSuccessfuly({ tasks })),
                    catchError((error) => of(taskActions.loadTasksFailure({error}))))
            )
        )
    )

}
