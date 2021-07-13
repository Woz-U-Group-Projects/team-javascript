import React from "react";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//Pages
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

//Components
import Navbar from "./components/Navbar";

function App() {
  return (
    
    //Routes for the application

      <Router>
        <div> 
          <Navbar />
         <Route exact path='/' component={Home} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/profile' component={Profile} />
         <Route exact path='/signup' component={Signup} />
        </div>

      </Router>
    

  
  );
}

export default App;
