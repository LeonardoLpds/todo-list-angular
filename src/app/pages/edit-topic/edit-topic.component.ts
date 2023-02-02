import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent {
  topicForm = this.formBuilder.group({
    icon: ['', [Validators.required, Validators.maxLength(1)]],
    name: ['', [Validators.required]]
  });
  

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.topicForm.value)
    console.log("Submit")
  }
}
