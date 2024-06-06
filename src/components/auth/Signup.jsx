import React, {useState} from 'react'
import { getAuth } from 'firebase/auth';
import {auth} from "../../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth";
import { Link } from 'react-router-dom';
 function SignUp() {
    const [email, setEmail]= useState('');
    const [password, setPassword] =useState('');
    const signup = (e) =>{
     e.preventDefault();
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential)=>{
      console.log(userCredential);
      alert("Congratulations Your account has been created!!");
     }).catch((error)=>{
       console.log(error);
     })
    }
  return (
    <div>
      <form onSubmit={signup}>
        <h1>Sign Up</h1>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Create Account</button>
       <Link to="/">Go to Home Page</Link>
      </form>
    </div>
  )
}
export default SignUp;