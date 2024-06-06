import React, { useState } from 'react';
import AuthDetails from "../AuthDetails";
import "./siginin.css"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Corrected import
import { Link } from 'react-router-dom';
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error handling


  const handleSignIn = async (e) => {
    e.preventDefault();

    // Ensure Firebase is initialized before attempting sign-in
    if (!getAuth()) {
      setError('Firebase is not initialized. Please initialize before signing in.');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      alert("Congratulations Your Have been Logged In!!"); // Success message
    } catch (error) {
      setError(error.message); // Set error state for display
      console.error(error); // Log error for debugging
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn} className={["signin-container", document.body.classList.contains('loaded') ? 'loaded' : ''].join(' ')}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <Link to="/">GO to Home Page</Link>
        {error && <p className="error-message">{error}</p>} {/* Display error if present */}
      </form>
      <AuthDetails/>
    </div>
  );
}

export default SignIn;
