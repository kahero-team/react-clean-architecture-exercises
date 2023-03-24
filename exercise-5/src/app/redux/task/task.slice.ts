import { createSlice, /*createAsyncThunk*/ PayloadAction} from '@reduxjs/toolkit'
//import { PlantDataRepository } from '../../../data/plant';
//import { PlantEntity } from '../../../domain/entities/plant';
//import { AddPlantUsecase } from '../../../domain/usecases/add_plant_usecase';



interface TodoType {
    id: number;
    title: string;
  }
export interface TaskState {
    loading: boolean
    title: string
    todos: TodoType[];
}

const initialState: TaskState = {
    loading: false,
    title: '',
    todos: [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
      ],
};

//export const addTask = createAsyncThunk("task/addTask", async (data, { rejectWithValue }) => {
//    const usecase = new AddPlantUsecase(new PlantDataRepository());
//    try {
//        const plant = await usecase.addPlant(new PlantEntity(-1, "Test"));
//        return plant;
//    } catch (err: any) {
//        return rejectWithValue(err.message);
//    }
//});

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
          },
        setTodos: (state, action: PayloadAction<TodoType[]>) => {
            state.todos = action.payload;
          },
        addTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos.push(action.payload);
          },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
          },
    },
    extraReducers: (builder) => {
//        builder.addCase(addTask.pending, (state, action) => {
//            state.loading = true;
//        });
//        builder.addCase(addTask.fulfilled, (state, action) => {
//            state.loading = false;
//        });
//        builder.addCase(addTask.rejected, (state, action) => {
//          state.loading = false;
//        });
    },
});

export const { setTitle, setTodos, addTodo, deleteTodo } = taskSlice.actions;
export default taskSlice.reducer;