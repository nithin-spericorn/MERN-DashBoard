import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/apiCall'

const Login = () => {
  const dispatch=useDispatch();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 
  
  const HandileClick =(e)=>{
e.preventDefault();

login(dispatch,{email,password})
console.log(email,password)
  }
    return (

        <div  style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <input type="text" placeholder="Username" onChange={(e)=>setEmail(e.target.value)}  style={{ padding: 10, marginBottom: 20 }}/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} style={{ padding: 10, marginBottom: 20 }}/>
            <button onClick={HandileClick} style={{ padding: 10, width:100 }}>Login</button>
        </div>
    )
}

export default Login
