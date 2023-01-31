import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoTopic } from 'src/app/models/todo-topic.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-topics',
  templateUrl: './todo-topics.component.html',
  styleUrls: ['./todo-topics.component.scss']
})
export class TodoTopicsComponent implements OnInit {
  @Output() choose: EventEmitter<TodoTopic> = new EventEmitter();
  constructor(public service: TodoService) {}

  ngOnInit() {
    this.service.loadTodoTopics();
  }

  chooseTopic(topic: TodoTopic) {
    this.choose.emit(topic);
  }
}
