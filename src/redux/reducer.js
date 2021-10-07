import { ADD_TASK, DELETE, TOGGLE } from "./actionType";

export const reducer = (state,{type,payload})=>{
    switch (type) {
        case ADD_TASK:
            return {
                 todo:[...state.todo , {...payload}]
            };
        case TOGGLE : 
            for(var i=0 ; i<state.todo.length ; i++){
                if(state.todo[i].id == payload){
                    state.todo[i].status = !state.todo[i].status;
                    break;
                }
            }
            return { todo : [...state.todo]};
        case DELETE : 
            state.todo = state.todo.filter((el)=>{
                return (el.id !== payload)
            });
            
            return {todo : [...state.todo]};
        default:
            return{...state}
    }
}