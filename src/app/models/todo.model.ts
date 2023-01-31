export class Todo {
  id?: number;
  name?: String;

  constructor(params: {id?: number, name?: String}) {
    this.id = params.id;
    this.name = params.name;
  }
}
