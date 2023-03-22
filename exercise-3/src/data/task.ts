import { TaskEntity } from "../domain/entities/task";
import { TaskRepository } from "../domain/repositories/task";

export class InMemoryTask implements TaskRepository {
    private tasks: TaskEntity[] = [];

    constructor() {
      this.tasks = [];
    }

    async getTask(): Promise<TaskEntity[]> {
        return this.tasks;
    }
    async removeTask(entity: TaskEntity): Promise<TaskEntity>{
        const index = this.tasks.findIndex(task => task.id === entity.id);
        if (index !== -1) {
          const task = this.tasks.splice(index, 1)[0];
          return task;
        }
        throw new Error("Task not found.");
    }
    async updateTask(entity: TaskEntity): Promise<TaskEntity>{
        const index = this.tasks.findIndex(task => task.id === entity.id);
        if (index !== -1) {
          this.tasks[index] = entity;
          return entity;
        }
        throw new Error("Task not found.");

    }
    async getAllTasks(): Promise<TaskEntity[]>{
        return this.tasks;
    }

    async addTask(entity: TaskEntity): Promise<TaskEntity> {
        this.tasks.push(entity);
        return entity
    }
}

export class LocalStorageTask implements TaskRepository {
    private storageKey: string = "tasks";

    async getTask(): Promise<TaskEntity[]> {
      const tasks = localStorage.getItem(this.storageKey);
      return tasks ? JSON.parse(tasks) : [];
    }
  
    async removeTask(entity: TaskEntity): Promise<TaskEntity> {
      const tasks = await this.getTask();
      const index = tasks.findIndex(task => task.id === entity.id);
      if (index !== -1) {
        const task = tasks.splice(index, 1)[0];
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
        return task;
      }
      throw new Error("Task not found.");
    }
  
    async updateTask(entity: TaskEntity): Promise<TaskEntity> {
      const tasks = await this.getTask();
      const index = tasks.findIndex(task => task.id === entity.id);
      if (index !== -1) {
        tasks[index] = entity;
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
        return entity;
      }
      throw new Error("Task not found.");
    }
  
    async getAllTasks(): Promise<TaskEntity[]> {
      const tasks = await this.getTask();
      return tasks;
    }
  
    async addTask(entity: TaskEntity): Promise<TaskEntity> {
      const tasks = await this.getTask();
      tasks.push(entity);
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
      return entity;
    }
}