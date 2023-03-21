import {
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
} from "./types"

const initialState = {
    // data: [],
    loading: false,
};

// NOTE: any is not a good practice
// You can refer to this document if you want TypeScript
export default function reducerTodo(state = initialState, action: any) {
    switch (action.type) {
        case ADD_TODO_REQUEST: {
            return { ...state, loading: true }
        }
        case ADD_TODO_SUCCESS: {
            return { ...state, loading: false }
        }
        case ADD_TODO_FAILURE: {
            return { ...state, loading: false }
        }
        default: {
            return state
        }
    }
}
