import { TaskEntity } from "../domain/entities/task";
import { TaskRepository } from "../domain/repositories/task";

export class TaskDataRepository implements TaskRepository {
  private tasks: TaskEntity[] = [
    new TaskEntity(1, "Complete task 1"),
    new TaskEntity(2, "Complete task 2")
  
  ];

  async getTasks(): Promise<TaskEntity[]> {
    return this.tasks;
  }

  async addTask(entity: TaskEntity): Promise<any> {
    const id = Math.max(...this.tasks.map(task => task.id)) + 1;
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