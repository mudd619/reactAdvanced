
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { authReducer } from "../authRedux/reducer";
import { reducer } from "./reducer";



const initState = {
    todo : {
        setLoading:false,
        setError : false,
        data:[]
    }
}

const rootReducer = combineReducers({
    auth : authReducer,
    todo : reducer
})

const middleware = (store) => (next) =>(actions) =>{
    if(typeof(actions) == "function"){
        console.log(actions(store.dispatch));
        console.log(actions)
        return 
    }
    console.log("before mw1",actions);
    const resp = next(actions);
    console.log("After mw1",actions);
    return resp
    // console.log("MW1 ",actions)
    // return next(actions)
}

// const middleware2 = (store) => (next) =>(actions) =>{
   
//     if(typeof(actions) == "function"){
//         console.log("im in")
//         return
//     }
//     console.log("before mw2");
//     const resp = next(actions);
//     console.log("After mw2",actions);
//     return resp
//     // console.log("MW2" , actions)
//     // return (next(actions))
// }

const store = createStore(
        rootReducer,
        compose(applyMiddleware(middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export {store}