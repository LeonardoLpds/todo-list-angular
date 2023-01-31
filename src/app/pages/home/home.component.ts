import { Component } from '@angular/core';
import { TodoTopic } from 'src/app/models/todo-topic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  topic?: TodoTopic;

  onTopicChoose(topic: TodoTopic) {
    this.topic = topic;
  }
}
