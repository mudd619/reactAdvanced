import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { GetError, GetLoading, GetSuccess } from "../todoRedux/action";



export function EditTodo(){

    const par = useParams();

    const [inp,setInp] = useState("");

    const {setLoading , setError ,data} = useSelector((state)=>{return state.todo.todo});
    const dispatch = useDispatch()

    const handleIndi = ()=>{
        dispatch(GetLoading())
        axios.get("http://localhost:3001/todos/"+par.id)
        .then((res)=>{
            dispatch(GetSuccess([res.data]))
        })
        .catch((err)=>{
            dispatch(GetError())
        })
    }

    useEffect(()=>{
        handleIndi()
    },[])

    const handleInp = (e)=>{
        setInp(e.target.value);
    }

    const change = (id)=>{
        data[0].task = inp;
        dispatch(GetLoading())
        axios.put(`http://localhost:3001/todos/${id}`,data[0])
        .then((res)=>{
            dispatch(GetSuccess([res.data]));
        })
        .catch((err)=>{
            dispatch(GetError())
        })
        setInp("")
    }

    return setLoading ? "...loading" : setError ? "Some error here" : data[0] ? <div>
        <input onChange={handleInp} style={{marginTop:"10%",width:"13%",height:"2.5vw"}} type="text" placeholder="Enter to Change task name"/>
        <button onClick={()=>change(data[0].id)} style={{width:"5%",height:"2.9vw"}}>Change</button>
        <div style={{margin:"3% 40% 3% 40%",backgroundColor:"#c73e3e",padding:"1%",fontSize:"2vw",borderRadius:"10px",fontWeight:"600"}}>{data[0].task}</div>
        <Link to="/"><button style={{width:"7%",height:"2.5vw"}}>Home</button></Link>
    </div> : "...wait"
}