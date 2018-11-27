import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_LIST,
    DELETE_TODO_LIST,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from "./actionTypes";
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoList = () => ({
    type: ADD_TODO_LIST
})

export const getDeleteTodoList = (index) => ({
    type: DELETE_TODO_LIST,
    index
})

export const initLsitAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('./list').then((res) => {
            const data = res.data;
            const action = initLsitAction(data)
            dispatch(action);
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const getInitList = () => ({
    type: GET_INIT_LIST
})