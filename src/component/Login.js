//context
import React,{useContext,  useState} from 'react'
import axios from 'axios'
import { USer } from '../Context/UseCotext';
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import Cookies from "universal-cookie/cjs/Cookies";
const Login = () => {
  const styleRigster ={
    display: "flex",
    justifycontent: "center",
    alignitems: "center",
    margintop:" 40px",
};
   
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const  [accept, setaccpet] = useState(false);
    const [Error ,setError]  = useState(false);


    const user= useContext(USer);
    console.log(user);
   const nav = useNavigate();
   const cookie = new Cookies();

    async function submit (e){
      e.preventDefault();
      setaccpet(true);
    try{
        let res = await axios.post("http://127.0.0.1:8000/api/login",{
          email:email,
          password:password,
      });
      const token = res.data.data.token;
      cookie.set("Bearer" ,token);
      const userDetails = res.data.data.user;
      user.setauth({ token, userDetails });
      nav("/dashboard");
    

    }catch(err){
      if(err.response.status === 401){
        setError(true);
      }
     setaccpet(true);
    }

    }

    
  return (
    <div>
         <Header/>
    
   <div className='parent' >
 
    <div className='register ' style={styleRigster}>
    <form  onSubmit={submit}>
    
       <label htmlFor='email'>email</label>
      <input id='email' placeholder='email' 
      type='email'
      required
         value={email}
      onChange={(e)=>setemail(e.target.value)}
/>

<label htmlFor='password'>password</label>
      <input
      id='password'
      placeholder='password'
      type='password'
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      />
           {
            password.length < 8 && accept&&(<p style={{color:"red"}}>password must be more 8 ch</p>)}


    
       <div  style={{textAlign:"center"
     
      }}>
         <button type='submit'  >Login</button>
         {accept && Error &&(
<p style={{color:"red"}}> email or password not corect</p>)}
</div>
    </form>
    </div>
    </div>
     </div>
  )
}

export default Login





// import React,{useContext, useState} from 'react'
// import axios from 'axios'
// import"../index.css"
// import Header from './Header';
// import { USer } from '../Context/UseCotext';
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
  
//     const [email, setemail] = useState("");
//     const [password, setpassword] = useState("");
//     const  [accept, setaccpet] = useState(false);
//     const [Error ,setError]  = useState(false);
    
//     const nav = useNavigate();
//     const user = useContext(USer);
//     console.log(user);

// async function submit (e){
//   e.preventDefault();
//   setaccpet(true);
//  try{
//   // send data
//   let res = await axios.post("http://127.0.0.1:8000/api/login",{
//     email:email,
//     password:password,
//   });
//   const token =res.data.data.token; 
//   const userDetails =res.data.data.user;
// user.setauth({token,userDetails});
// nav('/dashboard')

//  }catch(err){
// if(err.response.status === 401){
//   setError(true);
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
        
//          <label htmlFor='email'>email</label>
//         <input id='email' placeholder='email' 
//         type='email'
//         required
//            value={email}
//         onChange={(e)=>setemail(e.target.value)}
// />

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


        
//          <div  style={{textAlign:"center" }}>
//            <button type='submit' >Login</button>
//            {accept && Error&& (
//   <p style={{color:"red"}}>wrong email or password</p>)}
//  </div>
//       </form>
//       </div>
//   </div>
//   </>
//   )
// }

// export default Login 








 //localstorg

// import{useState} from 'react'
// import axios from 'axios'
// import Header from './Header'
// const Login = () => {
//     const [email, setemail] = useState("");
//     const [password, setpassword] = useState("");
//     const  [accept, setaccpet] = useState(false);
//     const [EmailError ,setEmailError]  = useState("");
//   async function submit (e){
//     let flag= true;
//   e.preventDefault();
//   setaccpet(true)
//   if (password.length<8){
//   flag=false
//   } else flag = true;
//   try{
//   if( flag ){
//    let res= await axios.post("http://127.0.0.1:8000/api/login",{
//       email:email,
//       password:password,
    
//     });
//     if(res.status === 200){
//       window.localStorage.setItem('email',email);
//       window.location.pathname="/"
//     }
//   }
//   }catch(err){
//     setEmailError(err.response.status);
//   }
//   }
//   return (
//     <>  <Header/>
//     <div className='parent' >
     
//     <div className='register '>
     
//       <form onSubmit={submit}>

//          <label htmlFor='email'>email</label>
//         <input id='email' placeholder='email' type='email'   value={email}
//         onChange={(e)=>setemail(e.target.value)}
// />{accept &&EmailError === 422 &&
//   <p> email already token</p>}
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


      
//          <div style={{textAlign:"center"}}>
//           <button type='submit' >login</button>
//  </div>
//       </form>
//       </div>
//   </div>
//   </>
//   )
// }


// export default Login