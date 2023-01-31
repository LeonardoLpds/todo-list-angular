import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoTopic } from '../models/todo-topic.model';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todoTopics: BehaviorSubject<TodoTopic[]> = new BehaviorSubject(Array<TodoTopic>());
  private _todos: BehaviorSubject<Todo[]> = new BehaviorSubject(Array<Todo>());

  public readonly todoTopics: Observable<any> = this._todoTopics.asObservable();
  public readonly todos: Observable<any> = this._todos.asObservable();

  constructor(private http: HttpClient) { }

  loadTodoTopics() {
    this.http.get<TodoTopic[]>(`${environment.apiUrl}/list`).subscribe(next => {
      this._todoTopics.next(next);
    })
  }

  loadTodos(topic?: TodoTopic) {
    this.http.get<Todo[]>(`${environment.apiUrl}/todo`).subscribe(next => {
      this._todos.next(next);
    });
  }
}
