import logo from './logo.svg';
import './App.css';
import {Routes, Route,Navigate,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Contactus from './components/Contactus';
import About from './components/About';
import Register from './components/Register';
import { Link } from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Template from './components/Template';
function App() {
  return (
    <div >
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Welcome!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* link for home */}
              <li className="nav-item">
                <NavLink className="nav-link" to="">Home</NavLink>
              </li>
              {/* link for Contactus */}
              <li className="nav-item">
                <NavLink className="nav-link" to="contactus">ContactUs</NavLink>
              </li>
              {/* link for about */}
              <li className="nav-item">
                <NavLink className="nav-link" to="About">About</NavLink>
              </li>
               {/* link for signup */}
               <li className="nav-item">
                <NavLink className="nav-link" to="Register">Register</NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="contactus" element={<Contactus/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Register" element={<Register/>}>
            <Route path="signin" element={<Signin/>}/>
            <Route path="" element={<Navigate replace to="SignUp"/>}/>// to load signup page while loading of register 
            <Route path="signup" element={<Signup />} />
            </Route>
             
      </Routes>

    </div>
  );
}

export default App;
