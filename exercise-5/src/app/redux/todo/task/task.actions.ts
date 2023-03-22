import { InMemoryTask } from '../../../../data/task'
import { TaskEntity } from '../../../../domain/entities/task'
import { AddTaskUsecase } from '../../../../domain/usecases/task/add_task_usecase'
import {
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
} from './task.types'

const _repository = new InMemoryTask()

export function addTodo() {
    return async function (dispatch: any) {
        dispatch({ type: ADD_TODO_REQUEST })
        try {
            const usecase = new AddTaskUsecase(_repository);
            usecase.addTask(new TaskEntity(-1, "Test"));
            dispatch({ type: ADD_TODO_SUCCESS })
        } catch (err) {
            dispatch({ type: ADD_TODO_FAILURE })
        }
    }
}