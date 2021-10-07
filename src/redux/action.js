import { ADD_TASK, DELETE, TOGGLE } from "./actionType"


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