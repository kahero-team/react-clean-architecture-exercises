import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import todo from "../app/redux/todo/task/task.reducers";
import task from "../app/redux/task/task.slice";

export const store = createStore(
    combineReducers({
        todo,
        task,
    }),
    applyMiddleware(thunk),
);
