import { TaskEntity } from "../../entities/task";
import { InMemoryTask } from "../../../data/task";

export class RemoveTaskUsecase {
    private taskRepo: InMemoryTask;
    constructor(taskRepo: InMemoryTask) {
      this.taskRepo = taskRepo;
    }
    async removeTask(entity: TaskEntity): Promise<TaskEntity> {
        return this.taskRepo.removeTask(entity);
    }
}