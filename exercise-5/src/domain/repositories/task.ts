import { TaskEntity } from "../entities/task";

export interface TaskRepository{
    getTasks(): Promise<TaskEntity[]>;
    addTask(id: number, title: string): Promise<TaskEntity>;
    removeTask(entity: TaskEntity): Promise<TaskEntity>;
    updateTask(entity: TaskEntity): Promise<TaskEntity>;
  }