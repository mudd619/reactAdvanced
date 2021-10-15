import { AUTH_LOADING, AUTH_SUCCESS,AUTH_ERROR } from "./actionType"

export const getAuthLoading = ()=>{
    return {type : AUTH_LOADING}
}

export const getAuthSuccess = (action)=>{
    return {
        type : AUTH_SUCCESS,
        payload : action
    } 
}

export const getAuthError = ()=>{
    return {type : AUTH_ERROR}
}