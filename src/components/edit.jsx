import { Button, ListItem, ListItemText, Skeleton, Stack, TextField } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { GetError, GetLoading, GetSuccess } from "../redux/action";



export function Edit(){

    const param = useParams();
    const {setLoading ,setError , data} = useSelector((state)=> state.todos);
    const dispatch = useDispatch();

    const [inp ,setInp] = useState("");

    const handleChange = (e)=>{
        setInp(e.target.value)
    }

    function GetIt(){
        dispatch(GetLoading())
        axios.get("http://localhost:3001/todos/"+param.id)
        .then((res)=>{
            dispatch(GetSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(GetError)
        })
    }

    function PatchIt(el){
        if(inp == ""){
            return alert("Enter Valid Details")
        }
        dispatch(GetLoading());
        el.task = inp
        axios.put("http://localhost:3001/todos/"+el.id,el)
        .then((res)=>{
            dispatch(GetSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(GetError)
        });
        setInp("")
    }

    function Status(el){
        dispatch(GetLoading());
        el.status = !el.status
        
        axios.put("http://localhost:3001/todos/"+el.id,el)
        .then((res)=>{
            dispatch(GetSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(GetError)
        })
    }

    useEffect(()=>{
        GetIt()
    },[])


    return <><h2 style={{textAlign:"center"}}>Edit Page</h2><div style={{margin:"4% 35% 5% 36%",padding:"3%",border:"1px solid #cacaca",boxShadow:"3px 4px #bbcea3",paddingBottom:"3%",backgroundColor:"#fcd8d8"}}>
        
        {setLoading ? 
            <Stack spacing={1}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={118} />
                </Stack> : setError ? "Something went wrong" : data.task ? 
                <div>
                    <TextField onChange={handleChange} style={{width:"80%",marginBottom:"3%"}} color="success" id="outlined-basic" label="Outlined" variant="outlined" label="Edit Task Name"/>
                    <Button onClick={()=>PatchIt(data)} color="error" style={{height : "55px"}} variant="contained">EDIT</Button>
                    <Box sx={{fontSize:30,textAlign:"center"}} style={{backgroundColor:"#e9dfdf",padding:"3%",margin:"5% 2% 15% 0%",borderRadius:"10px",border:"1px solid #cacaca",boxShadow:"3px 4px #c2c2c2"}}>
                        {data.task}
                    </Box>
                    <ListItem sx={{color:"#424141",fontSize:25}} style={{backgroundColor:"#d1caca",padding:"2%",margin:"5% 10% 13% 0%",borderRadius:"10px",border:"1px solid #cacaca",boxShadow:"3px 4px #c2c2c2"}}>
                        <ListItemText  primary={`Completed`} secondary={`Status : ${data.status}`} />
                        <Button onClick={()=>Status(data)} sx={{marginRight:0}} color="error" style={{height : "50px"}} variant="contained">Change</Button>
                   </ListItem>
                    
                </div> : <Stack spacing={1}>
                            <Skeleton variant="text" />
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="rectangular" width={210} height={118} />
            </Stack>
        }
        <Link style={{textDecoration:"none",margin:"0% 40%"}} to="/"><Button color="success" style={{height : "40px"}} variant="contained" >HOME</Button></Link>
    </div></>
}