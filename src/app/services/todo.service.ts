import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoTopic } from '../models/todo-topic.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todoTopics: BehaviorSubject<TodoTopic[]> = new BehaviorSubject(Array<TodoTopic>());
  public readonly todoTopics: Observable<any> = this._todoTopics.asObservable();

  constructor(private http: HttpClient) {
    this.loadTodoTopics();
  }

  loadTodoTopics() {
    this.http.get<TodoTopic[]>(`${environment.apiUrl}/list`).subscribe(next => {
      this._todoTopics.next(next);
    })
  }
}
