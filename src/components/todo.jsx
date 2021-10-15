import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { AddError, AddLoading, AddSucess, Delete, GetError, GetLoading, GetSuccess, handleAdd, Toggle } from "../todoRedux/action"
import {v4 as uuid} from "uuid";
import axios from "axios"
import { Link } from "react-router-dom";

function Todo(){

    const {setLoading ,setError , data} = useSelector((state)=>{return state.todo.todo});
    
    const dispatch = useDispatch();
    const [inp,setInp] = useState("");

    const [tot , setTot] = useState("")

    const handleInp = (e)=>{
        setInp(e.target.value)
    }

    const setAdd = ()=>{
        dispatch(AddLoading())
        axios.post("http://localhost:3001/todos",{
            status : false,
            task : inp
        })
        .then((res)=>{
            dispatch(AddSucess());
            GetIt();
            handleTot()
        })
        .catch((err)=>{
            dispatch(AddError());
            console.log("error occured");
        })
        setInp("")
    }

    const GetIt = ()=>{
        dispatch(GetLoading())
        axios.get("http://localhost:3001/todos")
        .then((res)=>{
            dispatch(GetSuccess(res.data));
        })
        .catch((err)=>{
            dispatch(GetError())
        })
    }

    const handleDelete = (id)=>{
        dispatch(GetLoading());
        axios.delete("http://localhost:3001/todos/"+id)
        .then((res)=>{
            GetIt();
            handleTot()
        })
        .catch((err)=>{
            dispatch(GetError())
        })
    }

    useEffect(()=>{
        GetIt();
        handleTot();
    },[]);


    const handleTot = ()=>{
        dispatch(GetLoading())
        axios.get("http://localhost:3001/todos")
        .then((res)=>{
            const non = res.data.filter((el)=>{
                return el.status === false;
            })
            setTot(non.length);
        })
        .catch((err)=>{
            dispatch(GetError())
        })
    }


    return <div>
        <h2>No. Of Tasks not Completed : {tot}</h2>
        <input style={{width:"20%",padding:"1%",marginTop:"3%"}} value={inp} onChange={handleInp} type="text" placeholder="Enter task to be added"/>
        <button style={{width:"5%",padding:"1%"}} onClick={setAdd}>Click</button><br/>

        {setLoading ? "...loading" : setError ? "Error Occured" : <div>{data.map((el)=>{
            return <div key={el.id} style={{margin:"1% 36.3% 0% 36.5%",display:"grid",gridTemplateColumns:"50% 30% 15%",textAlign:"left",background:"#8a4747",padding:"1%",borderRadius:"10px",fontSize:"1.5vw",color:"#c7c7c7"}}>
                <span>{el.task}</span>
                <Link to={`/todo/${el.id}`}><button style={{height:"2.5vw"}}>Details</button></Link>
                <button onClick={()=>handleDelete(el.id)}>Delete</button>
            </div>
        })}</div>}
    </div>
}

export {Todo};

// {data.map((el)=>{
//     return <div style={{display:"grid",gridTemplateColumns:"35% 40% 25%",textAlign:"left",fontSize:"1.5vw",backgroundColor:"#9b9b9b",margin:"2% 30% 0% 30%",padding:"1% 2%",borderRadius:"10px"}} key={el.id}>
//         <div ><span style={{fontWeight:"600"}}>{el.task}</span></div>
//         <div>
//             <button style={{width:"30%",padding:"4%"}} >Toggle</button>
//             <span style={{margin:"10% 4% 0% 7%",fontWeight:"600"}}>Status : {`${el.status}`}</span>
//         </div>
//         <button style={{marginLeft:"40%"}}>Delete</button>
//     </div>
// })}