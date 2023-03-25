import { TaskEntity } from "../../entities/task";
import { TaskRepository } from "../../repositories/task";

export class GetTasksUsecase {
    private taskRepo: TaskRepository;
    constructor(taskRepo: TaskRepository) {
        this.taskRepo = taskRepo;
    }
    async execute(): Promise<TaskEntity[]> {
        return this.taskRepo.getTasks();
    }
}