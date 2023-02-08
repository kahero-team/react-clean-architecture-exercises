import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import todo from "../app/redux/todo/reducers";
import task from "../app/redux/task/slice";

export const store = createStore(
    combineReducers({
        todo,
        task,
    }),
    applyMiddleware(thunk),
);
