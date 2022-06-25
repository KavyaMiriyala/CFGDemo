
import './App.css';
import {Routes, Route,Navigate,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Contactus from './components/Contactus';
import About from './components/About';
import Register from './components/Register';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Product from './components/Product';
function App() {
  return (
    <div >
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <a href='/'>
          <img src="https://tarufoundation.com/wp-content/uploads/2020/06/Transparent-Logo_Resize.png" alt="Taru Foundation"></img>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

               {/* link for homepage*/}
               <li className="nav-item mx-2 ">
                <NavLink className="nav-link" to=" "><h4>Home</h4></NavLink>
              </li>
              {/* link for products*/}
              <li className="nav-item mx-2">
                <NavLink className="nav-link " to="products"><h4>Products</h4></NavLink>
              </li>
              {/* link for Contactus */}
              <li className="nav-item mx-2">
                <NavLink className="nav-link " to="contactus"><h4>Contact SHG</h4></NavLink>
              </li>
              {/* link for about */}
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="About"><h4>About</h4></NavLink>
              </li>
               {/* link for signup */}
               <li className="nav-item mx-2">
                <NavLink className="nav-link" to="Register"><h4>Register</h4></NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="products" element={<Product/>}/>
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
