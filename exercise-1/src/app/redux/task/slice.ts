import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PlantDataRepository } from '../../../data/plant';
import { PlantEntity } from '../../../domain/entities/plant';
import { AddPlantUsecase } from '../../../domain/usecases/add_plant_usecase';

export interface TaskState {
    loading: boolean
}

const initialState: TaskState = {
    loading: false
};

export const addTask = createAsyncThunk("task/addTask", async (data, { rejectWithValue }) => {
    const usecase = new AddPlantUsecase(new PlantDataRepository());
    try {
        const plant = await usecase.addPlant(new PlantEntity(-1, "Test"));
        return plant;
    } catch (err: any) {
        return rejectWithValue(err.message);
    }
});

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTask.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addTask.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(addTask.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

const reducer = taskSlice.reducer;
export default reducer;