import { PlantDataRepository } from '../../../data/plant'
import { PlantEntity } from '../../../domain/entities/plant'
import { AddPlantUsecase } from '../../../domain/usecases/add_plant_usecase'
import {
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
} from './types'

const _repository = new PlantDataRepository()

export function addTodo() {
    return async function (dispatch: any) {
        dispatch({ type: ADD_TODO_REQUEST })
        try {
            const usecase = new AddPlantUsecase(_repository);
            usecase.addPlant(new PlantEntity(-1, "Test"));
            dispatch({ type: ADD_TODO_SUCCESS })
        } catch (err) {
            dispatch({ type: ADD_TODO_FAILURE })
        }
    }
}