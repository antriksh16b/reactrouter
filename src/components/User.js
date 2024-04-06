import { useParams } from "react-router-dom";
function User()
{
    let {userId}=useParams();
    return(
       <h1 className="text-center bg-slate-500 text-3xl p-4">User :  {userId}</h1>
    )
}
export default User;