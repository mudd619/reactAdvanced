import axios from "axios"
import { ADD_TASK, ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, DELETE, GET_SINGLE, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS, TOGGLE } from "./actionType"


export const handleAdd = (action)=>{
    return {
        type : ADD_TASK,
        payload : action
    }
}

export const Toggle = (action)=>{
    return {
        type : TOGGLE,
        payload : action
    }
}

export const Delete = (action)=>{
    return {
        type : DELETE,
        payload : action
    }
}

export const AddLoading = ()=>{
    return {
        type: ADD_TASK_LOADING,
    }
}

export const AddError = ()=>{
    return {
        type: ADD_TASK_ERROR,
    }
}

export const AddSucess = ()=>{
    return {
        type: ADD_TASK_SUCCESS,
    }
}

export const GetLoading = () => ()=>{
    return {
        type : GET_TASK_LOADING
    }
}

export const GetSuccess = (action)=>{
    return {
        type : GET_TASK_SUCCESS,
        payload : action
    }
}

export const GetError = ()=>{
    return {
        type : GET_TASK_ERROR
    }
}

export const GetSingle = (action)=>{
    return {
        type : GET_SINGLE,
        payload : action
    }
}

export const addTask = (inp) => (dispatch)=> {
    dispatch(AddLoading());
    axios.post("http://localhost:3001/todos",inp)
    .then((res)=>{
        dispatch(AddSucess());
        dispatch(getTask())
    })
    .catch((err)=>{
        dispatch(AddError())
    })
}

export const getTask = () => (dispatch) =>{
    dispatch(GetLoading)
    axios.get("http://localhost:3001/todos")
    .then((res)=>{
        const per = res.data.filter((el)=>{
            return el.category === "Personal"
        })
        const off = res.data.filter((el)=>{
            return el.category === "Official"
        })
        const oth = res.data.filter((el)=>{
            return el.category === "Others"
        })
        dispatch(GetSuccess({all:res.data,one:per,two:off,three:oth}))
    })
    .catch((res)=>{
        dispatch(GetError())
    })
}

export const deleteTask = (id) =>(dispatch)=>{
    dispatch(GetLoading());
    axios.delete("http://localhost:3001/todos/"+id)
    .then((res)=>{
        dispatch(getTask());
    })
    .catch((err)=>{
        dispatch(GetError())
    })
}



export const getOneTask = (id) =>(dispatch)=>{
    dispatch(GetLoading());
    axios.get("http://localhost:3001/todos/"+id)
    .then((res)=>{
        dispatch(GetSingle(res.data));
    })
    .catch((err)=>{
        console.log(err)
        dispatch(GetError())
    })
}

export const changeName = (el,inp)=>(dispatch)=>{
    dispatch(GetLoading());
    el.task = inp;
    axios.put("http://localhost:3001/todos/"+el.id,el)
    .then((res)=>{
        dispatch(GetSingle(res.data))
    })
    .catch((err)=>{
        dispatch(GetError())
    })
}

export const changeStatus = (el)=>(dispatch)=>{
    dispatch(GetLoading());
    el.status = !el.status;
    axios.put("http://localhost:3001/todos/"+el.id,el)
    .then((res)=>{
        dispatch(GetSingle(res.data))
    })
    .catch((err)=>{
        dispatch(GetError())
    })
}