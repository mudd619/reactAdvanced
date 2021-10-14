import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, SET_PAGE } from "./actionType"



export const AddLoading = ()=>{
    return {
        type : ADD_TODO_LOADING
    }
}

export const AddSuccess = ()=>{
    return {
        type : ADD_TODO_SUCCESS
    }
}

export const AddError = ()=>{
    return {
        type : ADD_TODO_ERROR
    }
}

export const GetLoading = ()=>{
    return {
        type : GET_TODO_LOADING
    }
}

export const GetSuccess = (action)=>{
    return {
        type : GET_TODO_SUCCESS,
        payload : action
    }
}

export const GetError = ()=>{
    return {
        type : GET_TODO_ERROR
    }
}

export const SetPage = (action)=>{
    return {
        type : SET_PAGE,
        payload : action
    }
}