import { useEffect, useState } from "react";

function Github()
{   let [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/antriksh16b')
        .then((res)=>res.json())
        .then(res=>{setData(res)})},[]);
    return(
        <h1 className="text-center bg-gray-500 p-4">Github : {data.name}</h1>
    )   
}
export default Github;