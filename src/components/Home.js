import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
 function Home() {
  return (
    <div>
       <h1>Welcome to Login Page</h1>
        <Link to="/create">Create Account</Link> 
        <Link to="/login">Login</Link>
    </div>
  )
}
export default Home;
