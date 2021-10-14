import { createStore } from "redux";
import { reducer } from "./reducer";

const init = {
    todos : {
        setLoading : false,
        setError : false,
        data : [],
        page : 1
        
    }
}

export const store = createStore(reducer , init);


