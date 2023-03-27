import { TaskEntity } from '../../../../domain/entities/task';
import { AddTaskUsecase } from '../../../../domain/usecases/task/add_usecase';
import { TaskLocalStorageRepository } from '../../../../data/task';
import {
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
} from './types'

const _repository = new TaskLocalStorageRepository()

export function addTodo(entity: TaskEntity) {
    return async function (dispatch: any) {
      dispatch({ type: ADD_TODO_REQUEST })
      try {
        const usecase = new AddTaskUsecase(_repository);
        usecase.execute(entity);
        dispatch({ type: ADD_TODO_SUCCESS })
      } catch (err) {
        dispatch({ type: ADD_TODO_FAILURE })
      }
    }
  }