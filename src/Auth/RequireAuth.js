// import { useContext } from "react"
// import {USer } from './../Context/Cotext';
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import Login from "../component/Login";

// export  default function RequireAuth(){
//     const user = useContext(USer);
//     const location = useLocation();
//     console.log(user);
//     return user.auth.userDetails ?
//     (<Outlet/>)
//     :(<Navigate  state={{form:location}}replace to={<Login/>}/>);
// }