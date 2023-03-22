import { TaskEntity } from "../../entities/task";
import { InMemoryTask } from "../../../data/task";

export class GetAllTasksUsecase {
    private taskRepo: InMemoryTask;
    constructor(taskRepo: InMemoryTask) {
        this.taskRepo = taskRepo;
    }
    async getAllTasks(): Promise<TaskEntity[]> {
        return this.taskRepo.getAllTasks();
    }
}