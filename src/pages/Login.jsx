import React, { useState } from 'react'
import {Link} from 'react-router-dom'
function Login() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const handleSubmit=(e)=>{
e.preventDefault()
console.log(email,password)
setEmail('')
setPassword('')

}
  return (
    <div>
    <div style={{ width: "500px", height: "2000px", padding: "300px 500px" }}>
      <div style={{ border: "2px red solid" ,height:'400px'}}>
        <h1 style={{ color: "white",textAlign:'center',paddingTop:'30px' }}>Sign In</h1>
        <br/>
        <form onSubmit={handleSubmit}
          style={{
    
            padding: "40px 50px 50px 50px",
          }}>
        
          <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} style={{backgroundColor:'	#A9A9A9',padding:'7px',color:"white"}}></input>
          <br />
          <br />
          <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} style={{backgroundColor:'	#A9A9A9',padding:'7px',color:"white"}}></input>
          <br />
          <br />
          <button style={{backgroundColor:'red',padding:'5px 45px 5px 45px',fontSize:'20px'}}>Sign In</button><br/><br/>
          <input type="checkbox"></input>
          <label style={{ color: "rgb(195, 189, 189)" }}>Remember Me</label> 
          <span style={{ color: "rgb(195, 189, 189)" ,paddingLeft:'150px'}}>Need a help?</span>
            <br /><br/>
            <p style={{ color: "rgb(195, 189, 189)" }}>
             
              New to netflix?
              <span style={{padding:'2px'}}></span>  <button>
                
              <Link to="/signup" style={{textDecoration:'none',color:'black',fontSize:'20px'}}>Sign Up</Link></button>
            </p>
        </form>
      </div>
    </div>
  </div>
);
}


export default Login