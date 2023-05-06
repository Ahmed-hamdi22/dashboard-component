
//context
import React,{useContext,  useEffect,  useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { USer } from '../Context/UseCotext';

const  UpDateProduct= () => {
 
    const [titel, setTitel] = useState("");
    const [Description, setDescription] = useState("");
    const  [image, setIamge] = useState("");
    const id = window.location.pathname.split("/").slice(-1)[0];

    const  [accept, setaccpet] = useState(false);
   
   const context = useContext(USer);
   const token = context.auth.token;
   const nav = useNavigate();
    async function submit (e){
      e.preventDefault();
      setaccpet(true);
    try{
        const formData = new FormData();
        formData.append("title",titel);
        formData.append("description",Description);
        formData.append("image",image);
        let res = await axios.post(`http://127.0.0.1:8000/api/product/update/${id}`,
         formData,
      {headers:{
        Authorization:"Bearer "+ token,
      }
      });
      
      nav("/dashboard/products");
    

    }catch(err){
    console.log(err)
    }
}

useEffect(() => {
  axios.get(`http://127.0.0.1:8000/api/product/showbyid/${id}`,{
    headers:{
  Accpet: "application/json",
  Authorization: "Bearer " +token,
  }})
  
  .then((data)=>{
    console.log(data)
    setTitel(data.data[0].title);
    //title /description  الموجود في اسمback
    setDescription(data.data[0].description)
  })
  }, [])
const styleRigster ={
  display: "flex",
  justifycontent: "center",
  alignitems: "center",
  margintop:" 40px",
};
  return (
   <div className='parent' >
    <div className='register ' style={styleRigster}>
    <form  onSubmit={submit}>
      <label htmlFor='titel'>titel</label>
      <input
      id='name'  placeholder='name'type='text'
       value={titel}
      onChange={(e)=>setTitel(e.target.value)}
      />
      {
      titel.length <1 && accept&&
     ( <p>Titel is required</p>)
     }
       <label htmlFor='email'>Description</label>
      <input id='Description' 
      placeholder='Description' 
      type='text'
      required
         value={Description}
      onChange={(e)=>setDescription(e.target.value)}
/>
{/* {accept && EmailError &&(
<p> email already token</p>)} */}
<label htmlFor='password'>image</label>
      <input
      id='iamge'
      placeholder='password'
      type='file'
      onChange={(e)=>setIamge(e.target.files.item(0))}
      />
           {/* {
            password.length < 8 && accept&&(<p style={{color:"red"}}>password must be more 8 ch</p>)} */}


       <div  style={{textAlign:"center"
     
      }}>
         <button type='submit'  >Cearte Products</button>
</div>
    </form>
    </div>
    </div>
  )
}

  

export default UpDateProduct
