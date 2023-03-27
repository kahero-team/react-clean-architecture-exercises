import { TaskEntity } from "../entities/task";

export interface TaskRepository{
    getTasks(): Promise<TaskEntity[]>;
    addTask(entity: TaskEntity): Promise<TaskEntity>;
    removeTask(entity: TaskEntity): Promise<TaskEntity>;
    updateTask(entity: TaskEntity): Promise<TaskEntity>;
  }