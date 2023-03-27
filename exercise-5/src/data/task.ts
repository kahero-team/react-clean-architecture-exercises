import { TaskEntity } from "../domain/entities/task";
import { TaskRepository } from "../domain/repositories/task";

export class TaskDataRepository implements TaskRepository {
  private tasks: TaskEntity[] = [
    new TaskEntity(1, "Complete task 1"),
    new TaskEntity(2, "Complete task 2"),
    new TaskEntity(3, "Complete task 3"),
  
  ];

  async getTasks(): Promise<TaskEntity[]> {
    return this.tasks;
  }

  async addTask(entity: TaskEntity): Promise<TaskEntity> {
    this.tasks.push(entity);
    return entity;
}

async removeTask(entity: TaskEntity): Promise<any> {
  console.log(entity)
  this.tasks = this.tasks.filter((task) => task.id !== entity.id);
  return this.tasks;
}
async updateTask(entity: TaskEntity): Promise<TaskEntity> {
  const index = this.tasks.findIndex((task) => task.id === entity.id);
  this.tasks[index] = entity;
  return entity;
}

}