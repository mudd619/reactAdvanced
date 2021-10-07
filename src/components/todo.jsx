import { useState } from "react"
import { Delete, handleAdd, Toggle } from "../redux/action"
import { store } from "../redux/store"
import {v4 as uuid} from "uuid"

export function TodoInp(){
    const [inp,setInp] = useState("");
    const [loop,setLoop] = useState([])

    const handleInp = (e)=>{
        setInp(e.target.value)
    }

    const handleClick = ()=>{
        store.dispatch(handleAdd({id: uuid(),task : inp,status : false}));

        setLoop(store.getState().todo);
        setInp("")
    }

    const handleToggle = (temp)=>{
        store.dispatch(Toggle(temp));
        setLoop(store.getState().todo);
    }

    const handleDelete = (temp)=>{
        store.dispatch(Delete(temp));
        setLoop(store.getState().todo);
    }

    return <div>
        <input style={{width:"20%",padding:"1%",marginTop:"3%"}} value={inp} onChange={handleInp} type="text" placeholder="Enter task to be added"/>
        <button style={{width:"5%",padding:"1%"}} onClick={handleClick}>Click</button>

        {loop.map((el)=>{
            return <div style={{display:"grid",gridTemplateColumns:"35% 40% 25%",textAlign:"left",fontSize:"1.5vw",backgroundColor:"#9b9b9b",margin:"2% 30% 0% 30%",padding:"1% 2%",borderRadius:"10px"}} key={el.id}>
                <div ><span style={{fontWeight:"600"}}>{el.task}</span></div>
                <div>
                    <button style={{width:"30%",padding:"4%"}} onClick={()=>{handleToggle(el.id)}}>Toggle</button>
                    <span style={{margin:"10% 4% 0% 7%",fontWeight:"600"}}>Status : {`${el.status}`}</span>
                </div>
                <button onClick={()=>{handleDelete(el.id)}} style={{marginLeft:"40%"}}>Delete</button>
            </div>
        })}
    </div>
}