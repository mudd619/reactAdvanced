import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { getAuthError, getAuthLoading, getAuthSuccess, login } from "../authRedux/action";


export function Login(){

    const {setLoading,setError} = useSelector((state)=> state.auth);
    const [inp ,setInp] = useState([]);

    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const name = e.target.name
        
        setInp({...inp, [name] :e.target.value })
    } 

    const history = useHistory()

    function GetIt(){
        if(inp.email === "" || inp.email === undefined || inp.password == "" || inp.password == undefined){
            return alert("Enter Valid Details")
        }
    
        dispatch(login(inp));
        history.push("/")
    }


    return <div><h2>Welcome to Reqres</h2>
        {setLoading ? "...loading" : setError ? "Something Went Wrong" : <>
            
            <input onChange={handleChange} name="email" style={{width:"20%",height:"2.5vw",margin:"5% 0% 0% 0%"}} type="text" placeholder="Enter Username or Email"/><br/>
            <input onChange={handleChange} name="password" style={{width:"20%",height:"2.5vw",margin:"3% 0% 4% 0%"}} type="password" placeholder="Enter Password"/><br/>
            <button onClick={GetIt} style={{width:"8%",height:"2.5vw"}}>Login</button>
        </>}
    </div>
}