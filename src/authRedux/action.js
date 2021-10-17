import axios from "axios"
import { AUTH_LOADING, AUTH_SUCCESS,AUTH_ERROR, AUTH_LOGOUT } from "./actionType"

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

export const getLogout = ()=>{
    return {
        type : AUTH_LOGOUT,
        payload : ""
    }
}

export const login = (inp)=> (dispatch)=>{
    dispatch(getAuthLoading())
    axios.post("https://reqres.in/api/login",inp)
    .then((res)=>{
        dispatch(getAuthSuccess(res.data.token));
    })
    .catch((err)=>{
        dispatch(getAuthError())
        console.log(err)
    })
}