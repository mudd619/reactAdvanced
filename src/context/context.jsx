import { createContext, useReducer } from "react";


const TodoContext = createContext("");

const init = {
    todos : {
       setLoading : false,
       setError : false,
       data : [] 
    }
}

const reducer = (state , {type , payload}) =>{
    switch (type) {
        case "ADD_TODO_SUCCESS":
            return {
                todos : {
                    ...state.todos,
                    setLoading : false,
                    setError : false
                }
            }
        case "ADD_TODO_LOADING":
            return {
                todos : {
                    ...state.todos,
                    setLoading : true,
                    setError : false
                }
            }
        case "ADD_TODO_ERROR":
            return {
                todos : {
                    ...state.todos,
                    setLoading : false,
                    setError : true
                }
            }
        case "GET_TODO_SUCCESS":
            return {
                todos : {
                    ...state.todos,
                    setLoading : false,
                    setError : false,
                    data : payload
                }
            }
        case "GET_TODO_LOADING":
            return {
                todos : {
                    ...state.todos,
                    setLoading : true,
                    setError : false
                }
            }
        case "GET_TODO_ERROR":
            return {
                todos : {
                    ...state.todos,
                    setLoading : false,
                    setError : true
                }
            }
        default:
            return {...state}
    }
}

function TodoProvider({children}){

    const [state , dispatch] = useReducer(reducer , init);

    return <TodoContext.Provider value={{state:state , dispatch:dispatch}}>{children}</TodoContext.Provider>
}

export {TodoContext,TodoProvider}