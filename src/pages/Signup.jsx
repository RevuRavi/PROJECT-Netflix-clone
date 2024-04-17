import React from "react";
import { Link } from "react-router-dom";
import { useState} from "react";

function Signup() {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

const handleSubmit= (e)=>{
  e.preventDefault()
  console.log(email,password)
  setEmail('')
  setPassword('')

}


  return (
    <div>
      <div style={{ width: "500px", height: "2000px", padding: "300px 500px" }}>
        <div style={{ border: "2px red solid", height: "400px" }}>
          <h1
            style={{ color: "white", textAlign: "center", paddingTop: "30px" }}
          >
            Sign Up
          </h1>
          <br />
          <form onSubmit={handleSubmit}
            style={{
              padding: "40px 50px 50px 50px",
            }}
          >
            <input onChange={(e)=> setEmail(e.target.value)}  type="email" placeholder="Email" style={{backgroundColor:'	#A9A9A9',padding:'7px',color:"white"}}></input>
          <br />
          <br />
          <input onChange={(e)=> setPassword(e.target.value)}  type="password" placeholder="Password" style={{backgroundColor:'	#A9A9A9',padding:'7px',color:"white"}}></input>
          <br />
          <br />
          <button style={{backgroundColor:'red',padding:'5px 45px 5px 45px',fontSize:'20px'}}>Sign Up</button><br/><br/>
          <input type="checkbox"></input>
          <label style={{ color: "rgb(195, 189, 189)" }}>Remember Me</label> 
          <span style={{ color: "rgb(195, 189, 189)" ,paddingLeft:'150px'}}>Need a help?</span>
            <br /><br/>
            <p style={{ color: "rgb(195, 189, 189)" }}>
              Already subscribed to netflix?
              <span style={{padding:'2px'}}></span>  <button>
                
              <Link to="/login" style={{textDecoration:'none',color:'black',fontSize:'20px'}}>Sign In</Link></button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
