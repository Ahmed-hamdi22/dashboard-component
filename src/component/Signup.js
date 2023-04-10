
// import React,{useContext, useState} from 'react'
// import axios from 'axios'
// // import { Link } from 'react-router-dom';
// import"../index.css"
// import Header from './Header';
// import { USer } from '../Context/Cotext';
// import { useNavigate } from 'react-router-dom';
// const Signup = () => {
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [password, setpassword] = useState("");
//     const [reptpass,setreptpass] = useState("");
//     const  [accept, setaccpet] = useState(false);
//     const [EmailError ,setEmailError]  = useState(false);
    
//     const nav = useNavigate();
//     const userNow = useContext(USer);
//     // console.log(userNow);

// async function submit (e){

//   e.preventDefault();
//   setaccpet(true);
 
//  try{

//   // send data
//   let res = await axios.post("http://127.0.0.1:8000/api/register",{
//     name:name,
//     email:email,
//     password:password,
//     password_confirmation:reptpass,
//   });
//   const token =res.data.data.token; 
//   const userDetails =res.data.data.user;
// userNow.setauth({token,userDetails});
// nav('/dashboard')

//  }catch(err){
// if(err.response.status === 422){
//   setEmailError(true);
// }
// setaccpet(true)
  
//  }

// }
//   return (
//     <>
//       <Header/>
//     <div className='parent' >
//     <div className='register '>
      
//       <form onSubmit={submit}>
//         <label htmlFor='name'>name</label>
//         <input
//         id='name'  placeholder='name'type='text'
//          value={name}
//         onChange={(e)=>setname(e.target.value)}
        
//         />
//         {
//         name.length<2 && accept&&
//        ( <p>user is required</p>)
//        }
//          <label htmlFor='email'>email</label>
//         <input id='email' placeholder='email' 
//         type='email'
//         required
//            value={email}
//         onChange={(e)=>setemail(e.target.value)}
// />
// {accept && EmailError&& (
//   <p> email already token</p>)}
// <label htmlFor='password'>password</label>
//         <input
//         id='password'
//         placeholder='password'
//         type='password'
//         value={password}
//         onChange={(e)=>setpassword(e.target.value)}
//         />
//              {
//               password.length < 8 && accept&&(<p style={{color:"red"}}>password must be more 8 ch</p>)}


//         <label htmlFor='reppass'>reptpass</label>
//         <input
//         id='reppass'
//         placeholder='reppass'
//         type='password'
//         value={reptpass}
//         onChange={(e)=>setreptpass(e.target.value)}
//         />
//         {
//             reptpass!==password&&accept&&<p style={{color:"red"}}>repetpassword must be=password</p>
//         }
//          <div  style={{textAlign:"center"
       
//         }}>
//            <button type='submit' >Register</button>
//  </div>
//       </form>
//       </div>
//   </div>
//   </>
//   )
// }

// export default Signup












//component طريقة
import"../index.css"
import Form from "./Form";
import Header from './Header';
const Signup = () => {
   

  return (
    <>
      <Header/>
    <div className='parent'
    style={{
      display: "flex",
      justifycontent: "center",
      alignitems: "center",
      margintop:" 40px",
    }}
    >
<Form button="Rister" 
endpoint="register"
navigate=""
styleRigster ={true}/>
  </div>
  </>
  )
}

export default Signup



 



// import React,{useState} from 'react'
// import axios from 'axios'
// // import { Link } from 'react-router-dom';
// import"../index.css"
// import Header from './Header';
// const Signup = () => {
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [password, setpassword] = useState("");
//     const [reptpass,setreptpass] = useState("");
//     const  [accept, setaccpet] = useState(false);
//     const [EmailError ,setEmailError]  = useState("");
//     // const  [flag, setflag] = useState(false);
//     // console.log(flag);
// async function submit (e){
//   let flag = true;
//   e.preventDefault();
//   setaccpet(true);
//   if ( password.length<8||reptpass!==password){
//       flag = false;
//  }else flag = true;
//  try{
//  if(flag){
//   // send data
//   let res = await axios.post("http://127.0.0.1:8000/api/register",{
//     name:name,
//     email:email,
//     password:password,
//     password_confirmation:reptpass,
//   });
//   if(res.status === 200){
//     window.localStorage.setItem("email",email)
//     window.location.pathname ="/"
//   }
// }
//  }catch(err){
//   setEmailError(err.response.status);
//  }

// }
//   return (
//     <>
//       <Header/>
//     <div className='parent' >
//     <div className='register '>
      
//       <form onSubmit={submit}>
//         <label htmlFor='name'>name</label>
//         <input
//         id='name'  placeholder='name'type='text'
//          value={name}
//         onChange={(e)=>setname(e.target.value)}
        
//         />
//         {/* {
//         name.length==="" && accept&&
//        ( <p>user is required</p>)
//        } */}
//          <label htmlFor='email'>email</label>
//         <input id='email' placeholder='email' 
//         type='email'
//         required
//            value={email}
//         onChange={(e)=>setemail(e.target.value)}
// />
// {accept && EmailError === 422 &&(
//   <p> email already token</p>)}
// <label htmlFor='password'>password</label>
//         <input
//         id='password'
//         placeholder='password'
//         type='password'
//         value={password}
//         onChange={(e)=>setpassword(e.target.value)}
//         />
//              {
//               password.length < 8 && accept&&(<p style={{color:"red"}}>password must be more 8 ch</p>)}


//         <label htmlFor='reppass'>reptpass</label>
//         <input
//         id='reppass'
//         placeholder='reppass'
//         type='password'
//         value={reptpass}
//         onChange={(e)=>setreptpass(e.target.value)}
//         />
//         {
//             reptpass!==password&&accept&&<p style={{color:"red"}}>repetpassword must be=password</p>
//         }
//          <div  style={{textAlign:"center"
       
//         }}>
//            <button type='submit' >Register</button>
//  </div>
//       </form>
//       </div>
//   </div>
//   </>
//   )
// }

// export default Signup