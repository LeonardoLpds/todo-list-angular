import { Component, Input, OnInit } from '@angular/core';
import { TodoTopic } from 'src/app/models/todo-topic.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() topic?: TodoTopic;
  
  constructor(public service: TodoService) {}

  ngOnInit(): void {
    this.service.loadTodos(this.topic);
  }
}
