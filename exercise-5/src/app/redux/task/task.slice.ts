import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TaskEntity } from '../../../domain/entities/task';
import { GetTasksUsecase } from '../../../domain/usecases/task/get_usecase';
import { InMemoryTask } from '../../../data/task';
//import { RemoveTasksUsecase } from '../../../domain/usecases/task/remove_usecase';


export const getTasks = createAsyncThunk<TaskEntity[]>(
  'tasks/fetchTasks',
  async () => {
    console.log('fetchTasks thunk called');
    const usecase = new GetTasksUsecase(new InMemoryTask());
    const tasks = await usecase.execute();
    return tasks;
  }
);

//export const deleteTodo = createAsyncThunk(
//  "categoryGroup/deleteData",
//  async (  data: any, { rejectWithValue, dispatch }) => {
//      try {
//        console.log('deleteTodo thunk called');
//        const usecase = new RemoveTasksUsecase(new InMemoryTask());
//        await usecase.execute(data);
//          dispatch(fetchTasks());
//        return data.id;
//      } catch (err) {
//          return rejectWithValue((err as Error).message)
//      }
//  },
//)


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
  name: 'todos',
  initialState,
  reducers: {
    removeTask: (state, action) => {
      console.log('remove', state.items )
      console.log('payload', action.payload )
      state.items = action.payload;
    },

    addTask: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
    //FETCH
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
      // DELETE DATA CASES
//      .addCase(deleteTodo.fulfilled, (state, action) => {
//        console.log("deleteTodo.fulfilled was triggered");
//        state.status = "succeeded";
//        state.items = state.items.filter((item) => item.id !== action.payload);
//      })
//      .addCase(deleteTodo.pending, (state) => {
//        state.status = 'loading';
//      })
//      .addCase(deleteTodo.rejected, (state, action) => {
//        state.status = 'failed';
//        state.error = action.payload as string;
//      })
  },
});

export const {  removeTask, addTask } =
todosSlice.actions;

export default todosSlice.reducer;
