import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GetError, GetLoading, GetSuccess } from "../redux/action";


export function TodoDetail(){
    const para = useParams();

    const {setLoading,setError ,data} = useSelector((state)=>{return state.todo});
    const dispatch = useDispatch()

    const handleIndi = ()=>{
        dispatch(GetLoading())
        axios.get("http://localhost:3001/todos/"+para.id)
        .then((res)=>{
            dispatch(GetSuccess([res.data]))
        })
        .catch((err)=>{
            dispatch(GetError())
        })
    }

    const change = (temp)=>{
        data[0].status = !temp
        axios.put("http://localhost:3001/todos/"+para.id,data[0])
        .then((res)=>{
            dispatch(GetSuccess([res.data]));
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        handleIndi()
    },[])
    
    return setLoading ? "...loading" : setError ? "Something went wrong" : data[0] ? <div>
        <div style={{margin:"10% 40% 3% 40%",backgroundColor:"#d49b9b",padding:"1%",fontSize:"2vw",borderRadius:"10px",fontWeight:"600"}}>{data[0].task}</div>
        <div style={{margin:"0% 40% 3% 40%",backgroundColor:"#d8d7d7",padding:"1%",fontSize:"1.5vw",borderRadius:"10px"}}>Completed : {data[0].status ? "Yes" : "No"}
           <span><button onClick={()=>change(data[0].status)} style={{marginLeft:"10%",height:"2vw"}}>Change</button></span>
        </div>
        <Link to={`${data[0].id}/edit`}><button style={{width:"9vw",height:"2.5vw"}}>Edit Task</button></Link>
        
    </div> : "..wait"
}