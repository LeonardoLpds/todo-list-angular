export class Todo {
  id?: number;
  name?: String;
  completed?: boolean;

  constructor(params: {id?: number, name?: String, completed?: boolean}) {
    this.id = params.id;
    this.name = params.name;
    this.completed = params.completed
  }
}
