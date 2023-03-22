import { TaskEntity } from "../../entities/task";
import { TaskRepository } from "../../repositories/task";

export class AddTaskUsecase {
    private taskRepo: TaskRepository;
    constructor(taskRepo: TaskRepository) {
        this.taskRepo = taskRepo;
    }
    async addTask(entity: TaskEntity): Promise<TaskEntity> {
        return this.taskRepo.addTask(entity);
    }
}