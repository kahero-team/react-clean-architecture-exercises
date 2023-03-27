export class TaskEntity{
    public id: number;
    public title: string;
    private completed: boolean;
  
    constructor(id: number, title: string, completed: boolean = false) {
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }