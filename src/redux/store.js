
import {createStore} from "redux";
import { reducer } from "./reducer";


const initState = {
    todo : []
}

const store = createStore(reducer,initState);

export {store}