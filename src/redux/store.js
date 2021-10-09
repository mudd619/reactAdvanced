
import {createStore} from "redux";
import { reducer } from "./reducer";


const initState = {
    todo : {
        setLoading:false,
        setError : false,
        data:[]
    }
}

const store = createStore(reducer,initState);

export {store}