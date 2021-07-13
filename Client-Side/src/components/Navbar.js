import React from 'react'
import {Link} from 'react-router-dom'
import Logo2 from '../images/blogsterlogo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src={Logo2}  width="60" height="60" alt="small logo"/>
            Blogster
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a className="nav-link"><Link to="/"> Home </Link></a>
            </li>

            <li className="nav-item active">
            <a class="nav-link"><Link to="/signup">Signup</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><Link to="/login">Login</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><Link to="/profile">Profile</Link></a>
            </li>
          </ul>
          
        </div>
      </nav>
    )
}

export default Navbar
