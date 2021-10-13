import { useEffect, useState } from "react";


function Timeout(ms){
    const [inp ,setInp] = useState(false)
    useEffect(()=>{
        const id = setTimeout(()=>{
            setInp(true)
        },ms)

        return ()=>{
            clearInterval(id)
        }
    },[]);

    return {inp:inp}
}

export function Output(){
    const {inp} = Timeout(5000);

    return inp ? <h1>I'm Back after 5 seconds</h1> : <h1>...Wait</h1>
}