import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import task from "./redux/task/task.slice";

export const store = createStore(
    
    combineReducers({
        task
    }),
    applyMiddleware(thunk),
);

console.log(store.getState());