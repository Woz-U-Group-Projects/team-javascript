import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo2 from '../images/blogsterlogo.png';

const Header = () => {
  return (
    <nav class='bg-gray-50'>
      <a
        class='navbar-brand flex flex-col justify-center items-center'
        href='#'>
        <img src={Logo2} className='' width={80} height={80} alt='small logo' />
        <span className='text-2xl text-blue-900'>Blogster</span>
      </a>
      
    </nav>
  );
};

export default Header;
