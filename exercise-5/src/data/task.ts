import { TaskEntity } from "../domain/entities/task";
import { TaskRepository } from "../domain/repositories/task";

export class TaskDataRepository implements TaskRepository {
  private task: TaskEntity[] = [
    new TaskEntity(1, "Complete task 1"),
    new TaskEntity(2, "Complete task 2"),
    new TaskEntity(3, "Complete task 3"),
  
  ];

  async getTasks(): Promise<TaskEntity[]> {
    return this.task;
  }

  async addTask(entity: TaskEntity): Promise<TaskEntity> {
    return entity;
}

async removeTask(entity: any): Promise<any> {
//  console.log(entity)
//  const deleteData = this.task.filter((todo) => todo.id !== entity.id);
//  console.log(deleteData)
  return entity;
}
async updateTask(entity: TaskEntity): Promise<TaskEntity> {
  return entity;
}

}