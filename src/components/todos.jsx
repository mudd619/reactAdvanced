import {TextField,Button,ListItem,ListItemText, Grid,Stack,Divider,Skeleton} from "@mui/material"
import { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import { AddError, AddLoading, AddSuccess, GetError, GetLoading, GetSuccess, SetPage } from "../redux/action";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


export function Todo(){
    const {setLoading , setError ,data,page} = useSelector((state)=>state.todos);
    const history = useHistory()

    const dispatch = useDispatch()
    
    const [inp,setInp] = useState("");

    const handleChange = (e)=>{
        setInp(e.target.value)
    }

    function PostIt(){
        if(inp == ""){
            return alert("Enter Relevent Task")
        }
        dispatch(AddLoading())
        axios.post("http://localhost:3001/todos",{
            task : inp,
            status : false
        })
        .then((res)=>{
            dispatch(AddSuccess());
            GetIt()
        })
        .catch((err)=>{
            dispatch(AddError())
        })
        setInp("")
    }

    function GetIt(){
        dispatch(GetLoading())
        axios.get(`http://localhost:3001/todos?_page=${page}&_limit=5`)
        .then((res)=>{
            dispatch(GetSuccess(res.data))
            
        })
        .catch((err)=>{
            dispatch(GetError())
        })
    }

    useEffect(()=>{
        GetIt();
    },[page])

    const handleDelete = (id)=>{
        dispatch(GetLoading())
        axios.delete("http://localhost:3001/todos/"+id)
        .then((res)=>{
            GetIt()
        })
        .catch((err)=>{
            dispatch(GetError())
        })
    }

    const handlePrev = ()=>{
        if(page > 1){
            dispatch(SetPage(-1))
        }
    }

    const handleNext = ()=>{
        
        if(data.length !==5){
            return
        }
        dispatch(SetPage(1));
        
    }

    return <div style={{backgroundColor:"#cde4a1",margin:"1% 34% 5% 38%",padding:"3%",boxShadow:"3px 4px #bbcea3",paddingBottom:"1%"}}>
        <TextField value={inp} onChange={handleChange} style={{width:"80%",marginBottom:"6%"}} color="success" id="outlined-basic" label="Outlined" variant="outlined" label="Enter Task"/>
        <Button onClick={PostIt} color="warning" style={{height : "55px"}} variant="contained">ADD</Button>
        <div>
            {setLoading ? <Stack spacing={1}>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                </Stack> : 
                setError ? "Something Went Wrong" : data[0] ? data.map((el)=>{
                    return  <ListItem key={el.id} style={{backgroundColor:"#d1d0d0",padding:"3%",margin:"5% 10% 0% 0%",borderRadius:"10px",border:"1px solid #cacaca",boxShadow:"3px 4px #c2c2c2"}}>
                    <ListItemText  primary={`${el.task}`} secondary={`Status : ${el.status}`} />
                    <Stack divider={<Divider orientation="vertical" flexItem />} spacing={1} direction={{ xs: 'column', sm: 'row' }}>
                        <Link style={{textDecoration:"none"}} to={`/${el.id}/edit`}><Button color="info" style={{height : "40px"}} variant="contained" >EDIT</Button></Link>
                        <Button onClick={()=>{handleDelete(el.id)}} color="error" style={{height : "40px"}} variant="contained" >DELETE</Button>
                    </Stack>
                </ListItem>
                }) : "" }
        </div>
        <Stack style={{margin:"15% 0% 0% 20%"}} divider={<Divider orientation="vertical" flexItem />} spacing={4} direction={{ xs: 'column', sm: 'row' }}>
            <Button onClick={handlePrev} color="success" style={{height : "40px"}} variant="contained" >Prev</Button>
            <Button onClick={handleNext} color="success" style={{height : "40px"}} variant="contained" >Next</Button>
        </Stack>
    </div>
}