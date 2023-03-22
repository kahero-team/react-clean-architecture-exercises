import { TaskEntity } from "../../entities/task";
import { TaskRepository } from "../../repositories/task";

export class GetTaskUsecase {
    private taskRepo: TaskRepository;
    constructor(taskRepo: TaskRepository) {
        this.taskRepo = taskRepo;
    }
    async getTask(): Promise<TaskEntity[]> {
        return this.taskRepo.getTask();
    }
}