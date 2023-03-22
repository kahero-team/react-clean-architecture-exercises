import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { InMemoryTask } from '../../../data/task';
import { TaskEntity } from '../../../domain/entities/task';
import { AddTaskUsecase } from '../../../domain/usecases/task/add_task_usecase';

export interface TaskState {
    loading: boolean
}

const initialState: TaskState = {
    loading: false
};

export const addTask = createAsyncThunk("task/addTask", async (data, { rejectWithValue }) => {
    const usecase = new AddTaskUsecase(new InMemoryTask());
    try {
        const task = await usecase.addTask(new TaskEntity(-1, "Test"));
        return task;
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