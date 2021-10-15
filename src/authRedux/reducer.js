import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS } from "./actionType";

const init = {
    setLoading : false,
    setError : false,
    token : ""
}

export const authReducer = (state = init , {type,payload})=>{
    switch (type) {
        case AUTH_LOADING:
            return {
                ...state,
                setLoading : true,
                setError : false
            }
        case AUTH_SUCCESS : 
           localStorage.setItem("token",JSON.stringify(payload));
           return {
               ...state,
               setLoading : false,
               setError : false,
               token : payload
           }
        case AUTH_ERROR:
            return {
                ...state,
                setLoading:false,
                setError:true
            }
    
        default:
           return  {...state}
    }
}