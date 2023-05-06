
import { useContext } from "react";
import { USer } from "../Context/UseCotext";
import { Navigate, Outlet, useLocation } from "react-router-dom";


export default function RequireAuth (){

    const user = useContext(USer);
    const location =useLocation();

    return user.auth.userDetails ?(
     <Outlet/>
     ):(
     <Navigate state={{form: location}} replace to='/login'/>);
    
}