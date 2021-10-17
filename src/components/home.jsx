import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTask, deleteTask, getTask } from "../todoRedux/action";


export function Home() {

    const dispatch = useDispatch();
    const {setLoading,setError,data,data1,data2,data3} = useSelector((state)=> state.todo.todo)
    const [inp,setInp] = useState({task : "",status :false , category : "Personal"});

    const handleChange = (e)=>{
        const {name ,value} = e.target;
        setInp({...inp , [name] : value})
    }

    const handlePost = ()=>{
        dispatch(addTask(inp));
        setInp({task : "",status :false , category : "Personal"});
        
    }

    const handleDelete = (el)=>{
        dispatch(deleteTask(el))
    }

    useEffect(()=>{
        dispatch(getTask())
    },[])
    
    return <div >
        {setLoading ? "...loading" : setError ? "Something went Wrong" : <div style={{width:"30%",position:"relative",top:"2%",left:"43%",marginBottom:"5%"}}>
            <input value={inp.task} onChange={handleChange} name="task" style={{width:"50%",padding:"1%",marginTop:"10%",height:"2vw"}} type="text" placeholder="Enter task to be added"/>
            <button onClick={handlePost} style={{width:"10%",padding:"1%",height:"2.8vw"}} >ADD</button><br/>
            <select value={inp.category} name="category" onChange={handleChange} style={{marginTop:"5%",width:"20%",height:"2vw"}}>
                <option>Personal</option>
                <option>Official</option>
                <option>Others</option>
            </select>
            <div style={{margin:"10% 10% 0% 10%",textAlign:"left",backgroundColor:"#caf599",padding:"2%",paddingBottom:"5%"}}>
                <div style={{fontSize:"1.4vw",padding:"4%"}}>Personal : </div>
                {data1.map((el)=>{
                    return <div key={el.id} style={{fontSize:"1.2vw",margin:"2% 5% 0% 5%",backgroundColor:"#dad8d8",border:"1px solid #e4e3e3",padding:"3%",borderRadius:"10px",color:"#6d6c6c"}}>
                        {el.task}
                        <button onClick={()=>handleDelete(el.id)} style={{float:"right",height:"2vw"}}>Delete</button>
                        <Link to={`/edit/${el.id}`}><button style={{float:"right",height:"2vw"}}>Edit</button></Link>
                    </div>
                })}
            </div>
            <div style={{margin:"10% 10% 0% 10%",textAlign:"left",backgroundColor:"#f7e19c",padding:"2%",paddingBottom:"5%"}}>
                <div style={{fontSize:"1.4vw",padding:"4%"}}>Official : </div>
                {data2.map((el)=>{
                    return <div key={el.id} style={{fontSize:"1.2vw",margin:"2% 5% 0% 5%",backgroundColor:"#dad8d8",border:"1px solid #e4e4e4",padding:"3%",borderRadius:"10px",color:"#6d6c6c"}}>
                        {el.task}
                        <button onClick={()=>handleDelete(el.id)} style={{float:"right",height:"2vw"}}>Delete</button>
                        <Link to={`/edit/${el.id}`}><button style={{float:"right",height:"2vw"}}>Edit</button></Link>
                    </div>
                })}
            </div>
            <div style={{margin:"10% 10% 0% 10%",textAlign:"left",backgroundColor:"#a6edfa",padding:"2%",paddingBottom:"5%"}}>
                <div style={{fontSize:"1.4vw",padding:"4%"}}>Others : </div>
                {data3.map((el)=>{
                    return <div key={el.id} style={{fontSize:"1.2vw",margin:"2% 5% 0% 5%",backgroundColor:"#dad8d8",border:"1px solid #dfdfdf",padding:"3%",borderRadius:"10px",color:"#6d6c6c"}}>
                        {el.task}
                        <button onClick={()=>handleDelete(el.id)} style={{float:"right",height:"2vw"}}>Delete</button>
                        <Link to={`/edit/${el.id}`}><button style={{float:"right",height:"2vw"}}>Edit</button></Link>
                    </div>
                })}
            </div>
        </div>}
    </div>
}