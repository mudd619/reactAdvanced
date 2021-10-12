import { UseFetch } from "./timer";



export function Display(){
    const {loading ,error,data} = UseFetch("https://api.github.com/search/users?q=masai&per_page=3");
    
    return <div>{loading ? "...loading" : error ? "error" : <div>{data.items.map((el)=>{
        return <div style={{backgroundColor:"#da7878",margin:"1% 43% 0% 43%",padding:"1%"}} key={el.id}>{el.login}</div>
    })}</div>}</div>
}