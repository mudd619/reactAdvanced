import {createStore} from "redux";

import { reducerFn } from "./redux/reducer.js";

import { handleAdd, handleSub } from "./redux/action.js";

// const reducerFn = (state,{type,payload})=>{
//     switch (type) {
//         case "ADD_COUNT": return {
//             ...state,counter:state.counter + payload
//         };

//         case "SUB_COUNT": return {
//             ...state,counter:state.counter - payload
//         }
    
//         default:
//             return{...state}
//     }
// }

// class Store{
//     constructor(reducerFn,initState){
//         this.reducer = reducerFn;
//         this.state = initState;
//     }

//     getState(){
//         return this.state
//     }

//     dispatch(action){
//         this.state = this.reducer(this.state,action);
//     }
// }

// const handle = (action)=>{
//     return {
//         type:"ADD_COUNT",
//         payload : action
//     }
// }

const initState = {counter : 0}

const store = createStore(reducerFn,initState);

console.log(store.getState());

//store.dispatch(handleAdd(1));
store.dispatch(handleAdd(1));
console.log(store.getState());

store.dispatch(handleSub(1));
console.log(store.getState())