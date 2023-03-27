import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TaskEntity } from '../../../domain/entities/task';
import { GetTasksUsecase } from '../../../domain/usecases/task/get_usecase';
import { TaskDataRepository } from '../../../data/task';
import { RemoveTaskUsecase } from '../../../domain/usecases/task/remove_usecase';
import { AddTaskUsecase } from '../../../domain/usecases/task/add_usecase';

export const getTasks = createAsyncThunk<TaskEntity[]>(
  'tasks/getTasks',
  async () => {
    console.log('getTasks thunk called');
    const usecase = new GetTasksUsecase(new TaskDataRepository());
    const tasks = await usecase.execute();
    return tasks;
  }
);
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (  data: any, { rejectWithValue, dispatch }) => {
      try {
        console.log('addTask thunk called');
        const usecase = new AddTaskUsecase(new TaskDataRepository());
        const result = await usecase.execute(data);
        return result;
      } catch (err) {
          return rejectWithValue((err as Error).message)
      }
  },
)
export const removeTask = createAsyncThunk(
  "tasks/removeTask",
  async (  data: any, { rejectWithValue, dispatch }) => {
      try {
        console.log('deleteTodo thunk called');
        const usecase = new RemoveTaskUsecase(new TaskDataRepository());
        const result = await usecase.execute(data);
    
        return result;
      } catch (err) {
          return rejectWithValue((err as Error).message)
      }
  },
)


interface TodosState {
  items: TaskEntity[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TodosState = {
  items: [],
  status: 'idle',
  error: null,
};

export const todosSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
//    removeTask: (state, action) => {
//      console.log('remove', state.items )
//      console.log('payload', action.payload )
//      state.items = action.payload;
//    },

//    addTask: (state, action) => {
//      state.items.push(action.payload);
//    },
  },
  extraReducers: (builder) => {
    builder
      //GET TASKS
      .addCase(getTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
      //ADD TASKS
      .addCase(addTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTask.fulfilled, (state, action: any) => {
        state.status = 'succeeded';
          state.items = action.payload;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
      // DELETE DATA CASES
      .addCase(removeTask.fulfilled, (state, action: any) => {
        console.log("deleteTodo.fulfilled was triggered");
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(removeTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
  },
});

//export const {  /*removeTask*/ /*addTask*/ } =
//todosSlice.actions;

export default todosSlice.reducer;
