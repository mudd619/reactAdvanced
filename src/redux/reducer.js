import { ADD_COUNT, DIV_COUNT, MUL_COUNT, SUB_COUNT } from "./actionType";


export const reducer = (state,{type,payload})=>{
    switch (type) {
        case ADD_COUNT:
            return {
                ...state, value : state.value + payload
            };
        case SUB_COUNT:
            return {
                ...state, value : state.value - payload
            };
        case MUL_COUNT:
            return {
                ...state,value : state.value *payload
            };
        case DIV_COUNT:
            return {
                ...state , value : state.value/payload
            }
    
        default:
            return{...state}
    }
}