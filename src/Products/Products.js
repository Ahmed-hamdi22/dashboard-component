

import axios from 'axios';
import{useContext, useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { USer } from '../Context/UseCotext';

const Products = () => {
 const [products, setproducts] = useState([]);
  const [runUseeffect, setRun] = useState(0);
const context = useContext(USer);
const token = context.auth.token;
console.log(token)
useEffect(() => {
axios.get("http://127.0.0.1:8000/api/product/show",{
  headers:{
Accpet: "application/json",
Authorization: "Bearer " +token,
}})

.then((data)=>setproducts(data.data))
.catch(err=>console.log(err))
}, [runUseeffect])
async function deleteuser(id) {
  try{
    const res = await axios .delete(`http://127.0.0.1:8000/api/product/delete/${id}`,{
      headers:{
        Authorization: "Bearer " +token,
      }})
    if(res.status === 200){
      setRun((prev)=>prev+1);
    }
  }catch(err){
    console.log(err)
  }
}
async function refresh(){
  try{
await axios.post(`http://127.0.0.1:8000/api/refresh`,null,
{headers:{
  Authorization: "Bearer " +token,

}})
.then((data)=>context.setauth((prev)=>{
  return {...prev, token:data.data.token};
}));

  } catch(err){
    console.log(err)
  }
}
 const showproduct = products.map((product,index)=> (
 <tr  key={index}>
  <td>{index+1}</td>
  <td>{product.title}</td>
  <td>{product.image}</td>
  <td>{product.description}</td>
  <td>
         <div style={{ display: "flex", justifyContent: "space-around" }}>
           <h3 style={{ color: "red" }} onClick={() => deleteuser(product.id)}>
             Delete
           </h3>

           <Link
             style={{ color: "black", textDecoration: "none" }}
             to={`${product.id}`}
           >
             <h3>Update</h3>
           </Link>
         </div>
       </td>
     </tr>
   ));
  return (
    <div style={{
        padding:"20px"
    }}>
      <table>
        <thead>
           <tr>
           <th>id</th>
                <th>title</th>
                <th>image</th>
                <th>description</th>
                <th>action</th>
           </tr>
        </thead>
        <tbody>
           {showproduct}</tbody>
 
      </table>
 
    </div>
  )
}

export default Products
