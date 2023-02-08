import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import todo from "../app/redux/todo/reducers";

export const store = createStore(
    combineReducers({
        todo,
    }),
    applyMiddleware(thunk),
);
