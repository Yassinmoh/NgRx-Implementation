import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './store/Tasks/task.reducer';
import * as taskActions from './store/Tasks/task.actions'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  _store = inject(Store<AppState>)
  ngOnInit(): void {
    this._store.dispatch(taskActions.loadTasks())
  }

}
