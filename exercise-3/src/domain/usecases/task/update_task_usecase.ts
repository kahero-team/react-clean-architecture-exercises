import { TaskEntity } from "../../entities/task";
import { InMemoryTask } from "../../../data/task";

export class UpdateTaskUsecase {
    private taskRepo: InMemoryTask;
    constructor(taskRepo: InMemoryTask) {
      this.taskRepo = taskRepo;
    }
    async updateTask(entity: TaskEntity): Promise<TaskEntity> {
        return this.taskRepo.updateTask(entity);
    }
}