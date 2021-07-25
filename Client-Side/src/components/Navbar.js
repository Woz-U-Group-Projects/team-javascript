import React from 'react'
import {Link} from 'react-router-dom'
import Logo2 from '../images/blogsterlogo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src={Logo2}  width="60" height="60" alt="small logo"/>
            Blogster
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          {/* <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link id="RouterNavLink" to="/" className="btn btn-primary"> Home </Link>
            </li>
            <li className="nav-item active">
              <Link id ="RouterNavLink" to="/registration" className="btn btn-primary">Signup</Link>
            </li>
            <li className="nav-item">
              <Link id="RouterNavLink" to="/login" className="btn btn-primary">Login</Link>
            </li>
            <li className="nav-item">
              <Link id="RouterNavLink" to="/profile/:id" className="btn btn-primary">Profile</Link>
            </li>
          </ul> */}
          
        </div>
      </nav>
    )
}

export default Navbar;
