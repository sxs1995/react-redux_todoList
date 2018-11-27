import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_LIST,
    DELETE_TODO_LIST,
    INIT_LIST_ACTION
} from "./actionTypes";

const defaultState = {
    inputValue: '',
    list: []
}

//reducer 可以接受state,但是绝对不能修改state
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_LIST:
            newState.list.push(newState.inputValue);
            newState.inputValue = "";
            return newState;
        case DELETE_TODO_LIST:
            newState.list.splice(action.index, 1)
            return newState;
        case INIT_LIST_ACTION:
            newState.list = action.data;
            return newState;
        default:
            return state;
    }
}