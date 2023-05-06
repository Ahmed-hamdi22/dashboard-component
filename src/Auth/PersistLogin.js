
import axios from "axios";
import { useContext ,useState,useEffect} from "react";
import { Outlet } from "react-router-dom";
import { USer } from "../Context/UseCotext";
import Loading from "../component/Loading"

import Cookies from "universal-cookie";


export default function PersistLogin(){
    const [loadding, setloading] = useState(true)

    const context = useContext(USer);
    const token = context.auth.token;
  const cookie = new Cookies();
  const getToken = cookie.get("Bearer")
useEffect(() => {
    async function refresh(){
            try{
          await axios.post(`http://127.0.0.1:8000/api/refresh`,null,
          {headers:{
            Authorization: "Bearer " +getToken,
          },
        })
          .then((data)=>
        { 
          console.log(data);
          cookie.set("Bearer",data.data.token)
          context.setauth((prev)=>{
            return {userDetails:data.data.user,
                 token:data.data.token,
                };    
          })}
          );
            } catch(err){
              console.log(err)
            }finally{
                setloading(false)
            }
          }
          !token ? refresh() :setloading(false);
}, [])



    return loadding? <Loading/> :<Outlet/>
}
