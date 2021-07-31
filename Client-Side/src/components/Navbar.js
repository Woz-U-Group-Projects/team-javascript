import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo2 from '../images/blogsterlogo.png';

const Navbar = () => {
  return (
    <nav class='bg-gray-50'>
      <a
        class='navbar-brand flex flex-col justify-center items-center'
        href='#'>
        <img src={Logo2} className='' width={80} height={80} alt='small logo' />
        <span className='text-2xl text-blue-900'>Blogster</span>
      </a>
      <ul class='flex item-center justify-center'>
        <li class='nav-item active'>
          <a className='nav-link'>
            <Link
              to='/'
              
              className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-2 px-2'
              activeClassName='bg-blue-900 text-white'>
              Home
            </Link>
          </a>
        </li>
        <li className='nav-item active'>
          <a class='nav-link'>
            <Link
              to='/registration'
              className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-2 px-2'
              activeClassName='bg-blue-900 text-white'>
              Signup
            </Link>
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link'>
            <Link
              to='/login'
              className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-2 px-2'
              activeClassName='bg-blue-900 text-white'>
              Login
            </Link>
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link'>
            <Link
              to='/profile'
              className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-2 px-2'
              activeClassName='bg-blue-900 text-white'>
              Profile
            </Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
