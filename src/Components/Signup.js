import React,{useState} from "react";
import axios from 'axios'
import './Signup.css' 

const Signup = (props) =>{
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [mobile,setMobile]=useState('')
  const [userName,setUserName]=useState('')
  const url=('https://ixonotest.herokuapp.com/api/User/submit-profile')

  const onSubmit = e=>{
    e.preventDefault();
    props.submit();
    axios.post(url,{
      "email": email,
      "name": name,
      "mobileNum": mobile,
      "password": password,
      "username": userName,
    })
    .then(res=>{
        console.log(res)  
    })
    .catch((error)=>{
        console.log(error)
    });
  }

return(
<div>
    <center><h1 className='submit'>Submit Profile</h1>
    <form onSubmit={onSubmit} className="form">
        <label htmlFor="Name">Name</label><br/>
        <input 
        type='text' 
        name='name' 
        id='Name' 
        value ={name} 
        onChange={e=>setName(e.target.value)}/>
    <div>
        <label htmlFor="email">Email</label><br/>
        <input 
        type='email'
        name='email' 
        id='email' 
        value ={email} 
        onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div>
        <label htmlFor="password">Password</label><br/>
        <input 
        type='password'
        name='password'
        id='password'
        value={password} 
        onChange={e=>setPassword(e.target.value)}/> 
        </div>
        <div>
            <label htmlFor="mobile">Mobile</label><br/>
            <input 
            type='number'
            name='mobile' 
            id='mobile' 
            value ={mobile}
            onChange={e=>setMobile(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="username">User Name</label><br/>
            <input 
            type='text'
            name='userName' 
            id='username' 
            value ={userName}
            onChange={e=>setUserName(e.target.value)} />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        </form></center>
    </div>
)}

export default Signup;  