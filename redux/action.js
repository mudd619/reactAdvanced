import { ADD_COUNT, SUB_COUNT } from "./actionType.js"


export const handleAdd = (action) =>{
    return {
        type : ADD_COUNT,
        payload : action
    }
}

export const handleSub = (action)=>{
    return {
        type : SUB_COUNT,
        payload : action
    }
}