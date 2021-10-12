import { useEffect, useState } from "react";
import axios from "axios"


export function UseFetch(url){
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [data,setData] = useState([]);

    function GetIt(){
        axios.get(url)
        .then((res)=>{
            setData({...res.data})
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err);
            setError(true);
            setLoading(false)
        })
    };

    useEffect(()=>{
        GetIt();
    },[])

    return {loading , error ,data}
}