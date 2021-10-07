import { useState } from "react"
import {createStore} from "redux"
import { reducer } from "../redux/reducer";
import { handleAdd, handleDiv, handleMul, handleSub } from "../redux/action";


function Input(){

    const [inp1 , setInp1] = useState("");
    const [inp2 , setInp2] = useState("");
    const [final,setFinal] = useState("-");

    const initState = {
        value : Number(inp1)
    }
    const store = createStore(reducer,initState);
    
    const handleA = ()=>{
        if(inp1 === "" || inp2 === ""){
            alert("Enter Valid Input")
        }
        store.dispatch(handleAdd(Number(inp2)));
        setFinal(store.getState().value);
        setInp1("")
        setInp2("")
    }

    const handleS = ()=>{
        if(inp1 === "" || inp2 === ""){
            alert("Enter Valid Input");
            return
        }
        store.dispatch(handleSub(Number(inp2)))
        setFinal(store.getState().value);
        setInp1("")
        setInp2("")
    }

    const handleM = ()=>{
        if(inp1 === "" || inp2 === ""){
            alert("Enter Valid Input");
            return
        }
        store.dispatch(handleMul(Number(inp2)))
        setFinal(store.getState().value);
        setInp1("")
        setInp2("")
    }

    const handleD = ()=>{
        if(inp1 === "" || inp2 === ""){
            alert("Enter Valid Input");
            return
        }
        store.dispatch(handleDiv(Number(inp2)));
        setFinal(store.getState().value);
        setInp1("")
        setInp2("")
    }

    return <div>
        <h2>Calculator</h2>
        <input style={{width:"20%",padding:"1%"}} onChange={(e)=>{setInp1(e.target.value)}} value={inp1} placeholder="Enter Intital Count Value" type="number"/><br/>
        <input style={{width:"20%",padding:"1%",marginTop:"2%"}} onChange={(e)=>{setInp2(e.target.value)}} value={inp2} placeholder="Enter value x to perform operation" type="number"/><br/>
        <button style={{padding:"1%",marginTop:"3%"}} onClick={handleM}>Multiply</button>
        <button style={{padding:"1%"}} onClick={handleA}>Addition</button>
        <button style={{padding:"1%"}} onClick={handleS}>Subtraction</button>
        <button style={{padding:"1%"}} onClick={handleD}>Division</button>
        
        <div style={{width:"15%",height:"6vw",borderRadius:"5px",margin:"5% 43% 0% 43%",fontSize:"2vw",backgroundColor:"#474646"}}>
          <div style={{paddingTop:"11%",color:"white"}}>{final}</div>
        </div>
        
    </div>
}

export {Input}