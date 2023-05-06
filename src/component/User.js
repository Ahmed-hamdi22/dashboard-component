// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import React from "react";
// import { Link } from "react-router-dom";
// import { USer } from "../Context/UseCotext";


// const User = () => {
//   const [users, setuser] = useState([]);
//   const [runUseeffect, setRun] = useState(0);

//   const context = useContext(USer);
//   const token = context.auth.token;

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/user/show", {
//       headers:{
//         Accept:"application/json",
//         Authorization:"Bearer " + token,
//       }
//       })
//       .then((data) => setuser(data.data))
//       .catch((err) => console.log(err));
//   }, [runUseeffect]);

//   const showUsers = users.map((user, index) => (
//     <tr key={index}>
//       <td>{index + 1}</td>
//       <td>{user.name}</td>
//       <td>{user.email}</td>
//       <td>
//         <div style={{ display: "flex", justifyContent: "space-around" }}>
//           <h3 style={{ color: "red" }} onClick={() => deleteuser(user.id)}>
//             Delete
//           </h3>

//           <Link
//             style={{ color: "black", textDecoration: "none" }}
//             to={`${user.id}`}
//           >
//             <h3>Update</h3>
//           </Link>
//         </div>
//       </td>
//     </tr>
//   ));

//   async function deleteuser(id) {
//     try {
//       const res = await axios.delete(
//         `http://127.0.0.1:8000/api/user/delete/${id}`,
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       if (res.status === 200) {
//         setRun((prev) => prev + 1);
//       }
//     } catch {
//       console.log("none");
//     }
//   }
//   async function refresh() {
//     try {
//       await axios
//         .post(`http://127.0.0.1:8000/api/refresh`, null, {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         })
//         .then((data) =>
//           context.setauth((prev) => {
//             return { ...prev, token: data.data.token };
//           })
//         );
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>{showUsers}</tbody>
//       </table>
//       <button onClick={refresh}>refreh</button>
//     </div>
//   );
// };

// export default User;




import axios from 'axios';
import{useContext, useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { USer } from '../Context/UseCotext';

const User = () => {
 const [user, setuser] = useState([]);
  const [runUseeffect, setRun] = useState(0);
const context = useContext(USer);
const token = context.auth.token;
console.log(token)
useEffect(() => {
axios.get("http://127.0.0.1:8000/api/user/show",{
  headers:{
Accpet: "application/json",
Authorization: "Bearer " +token,
}})

.then((data)=>setuser(data.data))
.catch(err=>console.log(err))
}, [runUseeffect])
async function deleteuser(id) {
  try{
    const res = await axios .delete(`http://127.0.0.1:8000/api/user/delete/${id}`,{
      headers:{
        Authorization: "Bearer " +token,
      }})
    if(res.status === 200){
      setRun((prev)=>prev+1);
    }
  }catch(err){
    console.log("none")
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
 const showUsers = user.map((user,index)=> (
 <tr  key={index}>
  <td>{index+1}</td>
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td>
         <div style={{ display: "flex", justifyContent: "space-around" }}>
           <h3 style={{ color: "red" }} onClick={() => deleteuser(user.id)}>
             Delete
           </h3>

           <Link
             style={{ color: "black", textDecoration: "none" }}
             to={`${user.id}`}
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
                <th>user</th>
                <th>email</th>
                <th>action</th>
           </tr>
        </thead>
        <tbody>
           {showUsers}</tbody>
 
      </table>
 
    </div>
  )
}

export default User




//old

// import axios from 'axios';
// import{useEffect,useState} from 'react'
// import { Link } from 'react-router-dom';

// const User = () => {
//  const [user, setuser] = useState([]);
//  const [runUseeffect, setRun] = useState(0);
//   useEffect(() => {
//   fetch("http://127.0.0.1:8000/api/user/show")
//   .then(res=>res.json())
//   .then(data=>{setuser(data)});
//  }, [runUseeffect]);

// async function deleteuser (id) {
//   try{
//  const res=await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
//  if(res.status === 200){
//   setRun ((prev)=>prev+1);
//  }

// }catch{
//   console.log("none");
// }
// }
//  const showUsers = user.map((user,index)=>
//  <tr key={index}>
//   <td>{index+1}</td>
//   <td>{user.name}</td>
//   <td>{user.email}</td>
//   <td>
//     <svg
//   onClick={()=>deleteuser(user.id)}
//    xmlns="http://www.w3.org/2000/svg"
//    style={{
//  color:'red',
// padding:"1px" ,
// width:"16",
//  height:"16",
//  cursor:'pointer'
// } } fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
//   <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
// </svg>
// <Link to={`${user.id}`}>
// <svg xmlns="http://www.w3.org/2000/svg"
// style={{
//   color:'#74afb9',
//   padding:"1px" ,
// width:"16",
//  height:"16",
//  cursor:'pointer'
// }}
//  fill="currentColor"className="bi bi-pencil-square" viewBox="0 0 16 16">
//   <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
//   <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
// </svg></Link>
// </td> </tr>)
//   return (
//     <div style={{
//         padding:"20px"
//     }}>
//       <table>
//         <thead>
//            <tr>
//            <th>id</th>
//                 <th>user</th>
//                 <th>email</th>
//                 <th>action</th>
//            </tr>
//         </thead>
//         <tbody>
//            {showUsers}</tbody>
//       </table>
//     </div>
//   )
// }

// export default User
