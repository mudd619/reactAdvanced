import { ADD_COUNT, SUB_COUNT } from "./actionType.js";


export const reducerFn = (state,{type,payload})=>{
    switch (type) {
        case ADD_COUNT:
            return {
                ...state, counter : state.counter + payload
            };
        case SUB_COUNT : 
             return{
                 ...state, counter : state.counter-payload
             }
    
        default:
            return{...state};
    }
}