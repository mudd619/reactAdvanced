import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { changeName, changeStatus, getOneTask, handleAdd } from "../todoRedux/action";


export function Edit(){

    const {setLoading,setError,single} = useSelector((state)=>state.todo.todo)
    const {id} = useParams();
    const dispatch = useDispatch();

    const [inp,setInp] = useState("");

    const handleChange = (e)=>{
        setInp(e.target.value)
    }

    function GetIt(id){
        dispatch(getOneTask(id))
    }

    useEffect(()=>{
        GetIt(id)
    },[])

    const handleTask = (el)=>{
        if(inp ===""){
            return alert("Enter Valid Input")
        }
        dispatch(changeName(el,inp));
        setInp("");
    }

    const handleStatus = (el)=>{
        dispatch(changeStatus(el));
    }

    
    return <div style={{backgroundColor:"#fd7f6e",margin:"8% 35% 5% 35%",position:"relative",left:"7%",padding:"1%",paddingBottom:"3%"}}>
    <h2 >Edit</h2>
    {setLoading ? "...laoding" : setError ? "Something went wrong" : 
    <div style={{marginTop:"10%"}}>
        <input value={inp} onChange={handleChange} type="text" style={{width:"50%",height:"2.5vw"}} placeholder="Enter task name"/>
        <button onClick={()=>{handleTask(single)}} style={{height:"2.8vw"}}>Change</button>
        <div style={{fontSize:"1.2vw",margin:"5% 5% 0% 5%",backgroundColor:"#dad8d8",border:"1px solid #e4e3e3",padding:"3%",borderRadius:"10px",color:"#6d6c6c"}}>
            {single.task}
        </div>
        <div style={{fontSize:"1.2vw",margin:"15% 5% 0% 5%",textAlign:"left",backgroundColor:"#c0c0c0",border:"1px solid #e4e3e3",padding:"3%",borderRadius:"10px",color:"#6d6c6c"}}>
            Status : {`${single.status}`}
            <button onClick={()=>handleStatus(single)} style={{float:"right",width:"20%",height:"2vw"}}>Toggle</button>
        </div>
    </div>}
</div>
}