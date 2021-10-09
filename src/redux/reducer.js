import { ADD_TASK, ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, DELETE, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS, TOGGLE } from "./actionType";



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
        case ADD_TASK_LOADING : 
            return {
                todo : {
                    ...state.todo,
                    setLoading : true,
                    setError : false
                }
            };
        case ADD_TASK_ERROR : 
            return {
                todo : {
                    ...state.todo,
                    setError : true,
                    setLoading:false
                }
            };
        case ADD_TASK_SUCCESS : 
            return {
                todo : {
                    ...state.todo,
                    setError : false,
                    setLoading:false
                }
            };
        case GET_TASK_LOADING : 
            return {
                todo : {
                    ...state.todo,
                    setError : false,
                    setLoading : true
                }
            }
        case GET_TASK_SUCCESS : 
            return {
                todo : {
                    ...state.todo,
                    setError : false,
                    setLoading : false,
                    data : [...payload]
                }
            }
        case GET_TASK_ERROR : 
            return {
                todo : {
                    ...state.todo,
                    setError : true,
                    setLoading : false
                }
            }
        default:
            return{...state}
    }
}