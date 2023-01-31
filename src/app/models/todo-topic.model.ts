export class TodoTopic {
  id?: number;
  icon?: String;
  name?: String;

  constructor(params: {id?: number, icon?: String, name?: String}) {
    this.id = params.id;
    this.icon = params.icon;
    this.name = params.name;
  }
}
