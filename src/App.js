import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthDetails from './components/AuthDetails';
import Home from './components/Home';
import SignIn from './components/auth/Siginin';
import SignUp from './components/auth/Signup';
function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/create" element={<SignUp/>} />
        <Route path="/seperate" element={<AuthDetails/>} />
    </Routes>
   
  );
}

export default App;
