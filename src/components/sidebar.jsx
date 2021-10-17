import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getLogout } from "../authRedux/action"


export function SideBar(){

    const {data,data1,data2,data3} = useSelector((state)=>state.todo.todo);

    const dispatch = useDispatch()
    const LogOut = ()=>{
        dispatch(getLogout())
    }

    return <div style={{border:"1Px solid #888787",height: "48.8vw",width:"20%",position:"fixed",top:"0%"}}>
    <h2 style={{margin:"10% 0%"}}>Task Lists</h2>
    <div style={{borderBottom:"1px solid black"}}></div>
    <div style={{marginTop:"20%",fontSize:"1.7vw"}}>More Details</div>
    <div style={{margin:"20% 30% 0% 30%",border:"1px solid black",padding:"1%"}}>
        <Link to="/all"><button style={{width:"75%",height:"2.3vw",backgroundColor:"white",border:"none",cursor:"pointer"}}>All</button></Link>
        <span>{data.length}</span>
    </div>
    <div style={{margin:"5% 30% 0% 30%",border:"1px solid black",padding:"1%"}}>
        <Link to="/personal"><button style={{width:"75%",height:"2.3vw",backgroundColor:"white",border:"none",cursor:"pointer"}}>Personal</button></Link>
        <span>{data1.length}</span>
    </div>
    <div style={{margin:"5% 30% 0% 30%",border:"1px solid black",padding:"1%"}}>
        <Link to="/official"><button style={{width:"75%",height:"2.3vw",backgroundColor:"white",border:"none",cursor:"pointer"}}>Official</button></Link>
        <span>{data2.length}</span>
    </div>
    <div style={{margin:"5% 30% 0% 30%",border:"1px solid black",padding:"1%"}}>
        <Link to="/others"><button style={{width:"75%",height:"2.3vw",backgroundColor:"white",border:"none",cursor:"pointer"}}>Others</button></Link>
        <span>{data3.length}</span>
    </div>
    <Link to="/"><button style={{marginTop:"10%",fontSize:"1.5vw",width:"40%",height:"3vw",backgroundColor:"white",border:"1px solid #9b9a9a",cursor:"pointer"}}>HOME</button></Link>
    <div style={{borderBottom:"1px solid black",marginTop:"10%"}}></div>
    <button onClick={LogOut} style={{marginTop:"10%",fontSize:"1.5vw",width:"40%",height:"3vw",backgroundColor:"white",border:"1px solid #9b9a9a",cursor:"pointer"}}>Logout</button>
    
</div>
}