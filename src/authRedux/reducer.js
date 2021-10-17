import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from "./actionType";

const init = {
    setLoading : false,
    setError : false,
    token : localStorage.getItem("token")
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
           localStorage.setItem("token",JSON.stringify(payload))
           return {
               ...state,
               setLoading : false,
               setError : false,
               token : localStorage.getItem("token")
           }
        case AUTH_ERROR:
            return {
                ...state,
                setLoading:false,
                setError:true
            }
        case AUTH_LOGOUT:
            localStorage.setItem("token","")
            return {
                ...state,
                token : "",
                setError:false,
                setLoading:false
            }

        
    
        default:
           return  {...state}
    }
}