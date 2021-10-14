import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, SET_PAGE } from "./actionType";


export const reducer = (state , {type , payload})=>{
    switch (type) {
        case ADD_TODO_LOADING:
            return {
                todos : {
                    ...state.todos,
                    setLoading : true,
                    setError : false
                }
            }
        case ADD_TODO_SUCCESS:
            return {
                todos : {
                    ...state.todos,
                    setLoading : false,
                    setError : false
                }
            }
        case ADD_TODO_ERROR:
            return {
                todos : {
                    ...state.todos,
                    setLoading : false,
                    setError : true
                }
            }
        case GET_TODO_LOADING:
            return {
                todos : {
                    ...state.todos,
                    setLoading:true,
                    setError:false
                }
            }
        case GET_TODO_SUCCESS:
            return {
                todos : {
                    ...state.todos,
                    setLoading:false,
                    setError:false,
                    data : payload
                }
            }
        case GET_TODO_ERROR:
            return {
                todos : {
                    ...state.todos,
                    setLoading:false,
                    setError : true
                }
            }
        case SET_PAGE:
            return {
                todos : {
                    ...state.todos,
                    page : state.todos.page + payload
                }
            }
    
        default:
            return{...state}
    }
}