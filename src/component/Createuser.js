//context
import React,{useContext,  useState} from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import { USer } from '../Context/UseCotext';

const Createuser = () => {
  const styleRigster ={
    display: "flex",
    justifycontent: "center",
    alignitems: "center",
    margintop:" 40px",
};
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [reptpass,setreptpass] = useState("");
    const  [accept, setaccpet] = useState(false);
    const [EmailError ,setEmailError]  = useState(false);

   const nav = useNavigate();
   const context = useContext(USer);
   const token = context.auth.token;
    async function submit (e){
      e.preventDefault();
      setaccpet(true);
    try{
        let res = await axios.post("http://127.0.0.1:8000/api/user/create",{
          name:name,
          email:email,
          password:password,
          password_confirmation:reptpass,
      },{headers:{
        Accept:"application/json",
        Authorization:"Bearer "+ token,
      }
      });
      
      nav("/dashboard/user");
    

    }catch(err){
      if(err.response.status === 422){
        setEmailError(true);
      }
     setaccpet(true);
    }

    }

    
  return (
   <div className='parent' >
    <div className='register ' style={styleRigster}>
    <form  onSubmit={submit}>
      <label htmlFor='name'>name</label>
      <input
      id='name'  placeholder='name'type='text'
       value={name}
  
      onChange={(e)=>setname(e.target.value)}
      
      />
      {
      name.length==="" && accept&&
     ( <p>user is required</p>)
     }
       <label htmlFor='email'>email</label>
      <input id='email' placeholder='email' 
      type='email'
      required
         value={email}
      onChange={(e)=>setemail(e.target.value)}
/>
{accept && EmailError &&(
<p> email already token</p>)}
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


      <label htmlFor='reppass'>reptpass</label>
      <input
      id='reppass'
      placeholder='reppass'
      type='password'
      value={reptpass}
      onChange={(e)=>setreptpass(e.target.value)}
      />
      {
          reptpass!==password&&accept&&<p style={{color:"red"}}>repetpassword must be=password</p>
      }
       <div  style={{textAlign:"center"
     
      }}>
         <button type='submit'  >Cearte User</button>
</div>
    </form>
    </div>
    </div>
  )
}



export default Createuser
