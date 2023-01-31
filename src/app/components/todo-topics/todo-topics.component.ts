import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-topics',
  templateUrl: './todo-topics.component.html',
  styleUrls: ['./todo-topics.component.scss']
})
export class TodoTopicsComponent implements OnInit {
  constructor(public service: TodoService) {}

  ngOnInit() {
    
  }
}
