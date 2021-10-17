import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteTask } from "../todoRedux/action";


export function Official(){

    const {setLoading,setError,data2} = useSelector((state)=>state.todo.todo);

    const dispatch = useDispatch()

    const handleDelete = (el)=>{
        dispatch(deleteTask(el))
    }

    return setLoading ? "...loading" : setError ? "Something Went Wrong" : 
        <div style={{backgroundColor:"#f7e19c",margin:"2% 35% 5% 35%",position:"relative",left:"7%",padding:"1%",paddingBottom:"3%"}}>
            <h2 >Official</h2>
            <div style={{marginTop:"10%"}}>{data2.map((el)=>{
                return<div key={el.id} style={{fontSize:"1.2vw",margin:"3% 5% 0% 5%",textAlign:"left",backgroundColor:"#dad8d8",border:"1px solid #e4e3e3",padding:"3%",borderRadius:"10px",color:"#6d6c6c"}}>
                    {el.task}
                    <button onClick={()=>handleDelete(el.id)} style={{float:"right",height:"2vw"}}>Delete</button>
                    <Link to={`/edit/${el.id}`}><button style={{float:"right",height:"2vw"}}>Edit</button></Link>
                </div>
            })}</div>
        </div>
}