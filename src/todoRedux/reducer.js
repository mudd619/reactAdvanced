import { ADD_TASK, ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, DELETE, GET_SINGLE, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS, TOGGLE } from "./actionType";

const initState = {
    todo : {
        setLoading:false,
        setError : false,
        single:"",
        data:[],
        data1:[],
        data2:[],
        data3:[]
    }
}

export const reducer = (state=initState,{type,payload})=>{
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
                    setError : false,

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
                    data:[...payload.all],
                    data1 : [...payload.one],
                    data2 : [...payload.two],
                    data3 : [...payload.three]
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
        case GET_SINGLE :
            return {
                todo : {
                    ...state.todo,
                    single : payload,
                    setError : false,
                    setLoading : false,
                }
            }
        default:
            return{...state}
    }
}