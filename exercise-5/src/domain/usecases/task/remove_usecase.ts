import { TaskEntity } from "../../entities/task";
import { TaskRepository } from "../../repositories/task";

export class RemoveTaskUsecase {
    private taskRepo: TaskRepository;
    constructor(taskRepo: TaskRepository) {
        this.taskRepo = taskRepo;
    }
    async execute(entity: TaskEntity): Promise<TaskEntity> {
        return this.taskRepo.removeTask(entity);
    }
}