import { ADD_COUNT, DIV_COUNT, MUL_COUNT, SUB_COUNT } from "./actionType"


const handleAdd = (action)=>{
    return {
        type : ADD_COUNT,
        payload : action
    }
}

const handleSub = (action)=>{
    return {
        type : SUB_COUNT,
        payload : action
    }
}

const handleMul = (action)=>{
    return {
        type:MUL_COUNT,
        payload:action
    }
}

const handleDiv = (action)=>{
    return {
        type:DIV_COUNT,
        payload:action
    }
}

export {handleAdd,handleSub,handleMul,handleDiv}