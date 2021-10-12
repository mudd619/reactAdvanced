import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/context";
import axios from "axios"


export function Todo(){

    const {state,dispatch} = useContext(TodoContext);

    const [inp,setInp] = useState("")

    const handleChange = (e)=>{
        setInp(e.target.value)
    }

    //to add the given todo task
    function postIt(){
        dispatch({
            type:"ADD_TODO_LOADING"
        })
        
        axios.post("http://localhost:3001/todos",{
            task : inp
        })
        .then((res)=>{
            dispatch({
                type:"ADD_TODO_SUCCESS"
            })
            GetIt()
        })
        .catch((err)=>{
            dispatch({
                type:"ADD_TODO_ERROR"
            })
            console.log(err)
        })
        setInp("")
    }


    //to get all the todos
    function GetIt(){
        dispatch({
            type:"GET_TODO_LOADING"
        })
        
        axios.get("http://localhost:3001/todos")
        .then((res)=>{
            dispatch({
                type:"GET_TODO_SUCCESS",
                payload : res.data
            })
        })
        .catch((err)=>{
            dispatch({
                type:"GET_TODO_ERROR"
            })
            console.log(err)
        })
    }

    useEffect(()=>{
        GetIt()
    },[])
    
    
    return <div>
        <input style={{height:"2vw",marginTop:"3%"}} onChange={handleChange} value={inp} type="text" value={inp} placeholder="Enter Task"/>
        <button style={{height:"2.4vw"}} onClick={postIt}>Add</button>
        {state.todos.setLoading ? "...laoding" : state.todos.setError ? "Error occured" : <div>
            {state.todos.data.map((el)=>{
                return <div style={{backgroundColor:"#da7c7c",padding:"1%",margin:"1% 42% 0% 42%"}} key={el.id}>{el.task}</div>
            })}
            </div>}
    </div>

}