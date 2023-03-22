import { TaskEntity } from "../entities/task";

export interface TaskRepository{
    getTask(): Promise<TaskEntity[]>;
    removeTask(entity: TaskEntity): Promise<TaskEntity>;
    updateTask(entity: TaskEntity): Promise<TaskEntity>;
    getAllTasks(entity: TaskEntity): Promise<TaskEntity[]>;
    addTask(entity: TaskEntity): Promise<TaskEntity>;
}
