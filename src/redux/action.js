import { ADD_TASK, ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, DELETE, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS, TOGGLE } from "./actionType"


export const handleAdd = (action)=>{
    return {
        type : ADD_TASK,
        payload : action
    }
}

export const Toggle = (action)=>{
    return {
        type : TOGGLE,
        payload : action
    }
}

export const Delete = (action)=>{
    return {
        type : DELETE,
        payload : action
    }
}

export const AddLoading = ()=>{
    return {
        type: ADD_TASK_LOADING,
    }
}

export const AddError = ()=>{
    return {
        type: ADD_TASK_ERROR,
    }
}

export const AddSucess = ()=>{
    return {
        type: ADD_TASK_SUCCESS,
    }
}

export const GetLoading = ()=>{
    return {
        type : GET_TASK_LOADING
    }
}

export const GetSuccess = (action)=>{
    return {
        type : GET_TASK_SUCCESS,
        payload : action
    }
}

export const GetError = ()=>{
    return {
        type : GET_TASK_ERROR
    }
}