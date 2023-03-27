import { TaskEntity } from "../domain/entities/task";
import { TaskRepository } from "../domain/repositories/task";

export class TaskInmemoryRepository implements TaskRepository {
  private tasks: TaskEntity[] = [
    new TaskEntity(1, "Complete task 1"),
    new TaskEntity(2, "Complete task 2")
  
  ];

  async getTasks(): Promise<TaskEntity[]> {
    return this.tasks;
  }

  async addTask(entity: TaskEntity): Promise<any> {
    const id = Math.floor(Math.random() * 1000000);
    const newTask = new TaskEntity(id, entity.title);
    this.tasks.push(newTask);
    return this.tasks;
  }

async removeTask(entity: TaskEntity): Promise<any> {
  const deletedTask = this.tasks.filter((task) => task.id !== entity.id);
  return deletedTask;
}
async updateTask(entity: TaskEntity): Promise<TaskEntity> {
  const index = this.tasks.findIndex((task) => task.id === entity.id);
  this.tasks[index] = entity;
  return entity;
}

}

export class TaskLocalStorageRepository implements TaskRepository {
  private localStorageKey = "tasks";
  private localStorageIdKey = "tasksId";
  private tasks: TaskEntity[];
  private tasksId = 1;

  constructor() {
    const tasks = localStorage.getItem(this.localStorageKey);
    this.tasks = tasks ? JSON.parse(tasks) : [];

    const tasksId = localStorage.getItem(this.localStorageIdKey);
    if (tasksId != null) {
      this.tasksId = parseInt(tasksId);
    }
  }

  async getTasks(): Promise<TaskEntity[]> {
    return this.tasks;
  }

  async addTask(entity: TaskEntity): Promise<any> {
    const newTask = new TaskEntity(this.tasksId++, entity.title);
    this.tasks.push(newTask);
    this.saveTasksToLocalStorage();
    return this.tasks;
  }

  async removeTask(entity: TaskEntity): Promise<any> {
    const index = this.tasks.findIndex((task) => task.id === entity.id);
    if (index === -1) {
      return;
    }
    this.tasks.splice(index, 1);
    this.saveTasksToLocalStorage();
    return this.tasks;
  }

  async updateTask(entity: TaskEntity): Promise<TaskEntity> {
    const index = this.tasks.findIndex((task) => task.id === entity.id);
    if (index === -1) {

    }
    this.tasks[index] = entity;
    this.saveTasksToLocalStorage();
    return entity;
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
    localStorage.setItem(this.localStorageIdKey, this.tasksId.toString());
  }
}