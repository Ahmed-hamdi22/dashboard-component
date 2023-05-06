//context
import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { USer } from '../Context/UseCotext';

const Form = (props) => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [reptpass,setreptpass] = useState("");
    // const  [accept, setaccpet] = useState(false);
    const [EmailError ,setEmailError]  = useState("");
    const userNow = useContext(USer);
    console.log(userNow);
   
    const styleRigster ={
      display: "flex",
      justifycontent: "center",
      alignitems: "center",
      margintop:" 40px",
};
  useEffect(() => {
  setemail(props.email);
  setname(props.name);
  }, [props.email,props.name]);

    async function submit (e){
      e.preventDefault();
    try{
     
        let res = await axios.post("http://127.0.0.1:8000/api/register",{
          name:name,
          email:email,
          password:password,
          password_confirmation:reptpass,
      });
      const token =res.data.data.token; 
        const userDetails =res.data.data.user;
        userNow.setauth({token, userDetails});
      // userNow.setauth("stored");
    

    }catch(err){
      setEmailError(err.response.status);
    }
    }
  return (
    <div className='register ' style={props.styleRigster && styleRigster}>
          {/* <form style={props.styleRigster&&form} onSubmit={submit}> */}

    <form  onSubmit={submit}>
      <label htmlFor='name'>name</label>
      <input
      id='name'  placeholder='name'type='text'
       value={name}
  
      onChange={(e)=>setname(e.target.value)}
      
      />
      {/* {
      name.length==="" && accept&&
     ( <p>user is required</p>)
     } */}
       <label htmlFor='email'>email</label>
      <input id='email' placeholder='email' 
      type='email'
      required
         value={email}
      onChange={(e)=>setemail(e.target.value)}
/>
{/* {accept && EmailError === 422 &&(
<p> email already token</p>)} */}
<label htmlFor='password'>password</label>
      <input
      id='password'
      placeholder='password'
      type='password'
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      />
           {/* {
            password.length < 8 && accept&&(<p style={{color:"red"}}>password must be more 8 ch</p>)} */}


      <label htmlFor='reppass'>reptpass</label>
      <input
      id='reppass'
      placeholder='reppass'
      type='password'
      value={reptpass}
      onChange={(e)=>setreptpass(e.target.value)}
      />
      {/* {
          reptpass!==password&&accept&&<p style={{color:"red"}}>repetpassword must be=password</p>
      } */}
       <div  style={{textAlign:"center"
     
      }}>
         <button type='submit'  >{props.button}</button>
</div>
    </form>
    </div>
  )
}

export default Form






// // loaclstorg



// // import React,{useEffect, useState} from 'react'
// // import axios from 'axios'

// // const Form = (props) => {
// //     const [name, setname] = useState("");
// //     const [email, setemail] = useState("");
// //     const [password, setpassword] = useState("");
// //     const [reptpass,setreptpass] = useState("");
// //     const  [accept, setaccpet] = useState(false);
// //     const [EmailError ,setEmailError]  = useState("");
    
   
// //     const styleRigster ={
      
// //       display: "flex",
// //       justifycontent: "center",
// //       alignitems: "center",
// //       margintop:" 40px",
// //       // position:"relative";
  
// // };
// //   useEffect(() => {
// //   setemail(props.email)
// //   setname(props.name)
// //   }, [props.email,props.name])

// //     async function submit (e){
// //       let flag = true;
// //       e.preventDefault();
// //       setaccpet(true);
// //       if ( password.length<8||reptpass!==password){
// //         flag = false;
// //        //  لو يوجد خطا لان يعمل
// //     }else flag = true;
// //     try{
// //       if(flag){
// //         let res = await axios.post(`http://127.0.0.1:8000/api/${props.endpoint}`,{
// //           name:name,
// //           email:email,
// //           password:password,
// //           password_confirmation:reptpass,
// //       });
// //       if(res.status===200){
// //        props.hasLocalStorage&& window.localStorage.setItem("email",email)
// //         window.location.pathname=`/${props.navigate}`
// //       }}
// //     }catch(err){
// //       setEmailError(err.response.status)
// //     }
// //     }
// //   return (
// //     <div className='register ' style={props.styleRigster && styleRigster}>
// //           {/* <form style={props.styleRigster&&form} onSubmit={submit}> */}

// //     <form  onSubmit={submit}>
// //       <label htmlFor='name'>name</label>
// //       <input
// //       id='name'  placeholder='name'type='text'
// //        value={name}
  
// //       onChange={(e)=>setname(e.target.value)}
      
// //       />
// //       {/* {
// //       name.length==="" && accept&&
// //      ( <p>user is required</p>)
// //      } */}
// //        <label htmlFor='email'>email</label>
// //       <input id='email' placeholder='email' 
// //       type='email'
// //       required
// //          value={email}
// //       onChange={(e)=>setemail(e.target.value)}
// // />
// // {accept && EmailError === 422 &&(
// // <p> email already token</p>)}
// // <label htmlFor='password'>password</label>
// //       <input
// //       id='password'
// //       placeholder='password'
// //       type='password'
// //       value={password}
// //       onChange={(e)=>setpassword(e.target.value)}
// //       />
// //            {
// //             password.length < 8 && accept&&(<p style={{color:"red"}}>password must be more 8 ch</p>)}


// //       <label htmlFor='reppass'>reptpass</label>
// //       <input
// //       id='reppass'
// //       placeholder='reppass'
// //       type='password'
// //       value={reptpass}
// //       onChange={(e)=>setreptpass(e.target.value)}
// //       />
// //       {
// //           reptpass!==password&&accept&&<p style={{color:"red"}}>repetpassword must be=password</p>
// //       }
// //        <div  style={{textAlign:"center"
     
// //       }}>
// //          <button type='submit'  >{props.button}</button>
// // </div>
// //     </form>
// //     </div>
// //   )
// // }

// // export default Form
