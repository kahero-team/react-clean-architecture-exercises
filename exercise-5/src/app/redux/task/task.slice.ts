import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { InMemoryTask } from '../../../data/task';
import { TaskEntity } from '../../../domain/entities/task';
import { AddTaskUsecase } from '../../../domain/usecases/task/add_task_usecase';
import { GetTaskUsecase } from '../../../domain/usecases/task/get_task_usecase';
import { GetAllTasksUsecase } from '../../../domain/usecases/task/get_all_task_usecase';
import { RemoveTaskUsecase } from '../../../domain/usecases/task/remove_task_usecase';
import { UpdateTaskUsecase } from '../../../domain/usecases/task/update_task_usecase';

export interface TaskState {
    loading: boolean
}

const initialState: TaskState = {
    loading: false
};

export const getTask = createAsyncThunk("task/getTask", async (data, { rejectWithValue }) => {
    const usecase = new GetTaskUsecase(new InMemoryTask());
    try {
        const task = await usecase.getTask();
        return task;
    } catch (err: any) {
        return rejectWithValue(err.message);
    }
});

export const addTask = createAsyncThunk("task/addTask", async (data, { rejectWithValue }) => {
    const usecase = new AddTaskUsecase(new InMemoryTask());
    try {
        const task = await usecase.addTask(new TaskEntity(-1, "Test"));
        return task;
    } catch (err: any) {
        return rejectWithValue(err.message);
    }
});

export const getAllTasks = createAsyncThunk("task/getAllTask", async (data, { rejectWithValue }) => {
    const usecase = new GetAllTasksUsecase(new InMemoryTask());
    try {
        const task = await usecase.getAllTasks();
        return task;
    } catch (err: any) {
        return rejectWithValue(err.message);
    }
});

export const removeTask = createAsyncThunk("task/removeTask", async (data, { rejectWithValue }) => {
    const usecase = new RemoveTaskUsecase(new InMemoryTask());
    try {
        const task = await usecase.removeTask(new TaskEntity(-1, "Test"));
        return task;
    } catch (err: any) {
        return rejectWithValue(err.message);
    }
});

export const updateTask = createAsyncThunk("task/updateTask", async (data, { rejectWithValue }) => {
    const usecase = new UpdateTaskUsecase(new InMemoryTask());
    try {
        const task = await usecase.updateTask(new TaskEntity(-1, "Test"));
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
        //GetTaskk
        builder.addCase(getTask.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getTask.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(getTask.rejected, (state, action) => {
            state.loading = false;
        });
        //AddTask
        builder.addCase(addTask.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addTask.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(addTask.rejected, (state, action) => {
            state.loading = false;
        });
        //GetAllTask
        builder.addCase(getAllTasks.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllTasks.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(getAllTasks.rejected, (state, action) => {
            state.loading = false;
        });
        //RemoveTask
        builder.addCase(removeTask.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(removeTask.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(removeTask.rejected, (state, action) => {
            state.loading = false;
        });
        //UpdateTask
        builder.addCase(updateTask.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateTask.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(updateTask.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

const reducer = taskSlice.reducer;
export default reducer;