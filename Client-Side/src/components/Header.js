import React from 'react';

import Logo2 from '../images/blogsterlogo.png';

const Header = () => {
  return (
    <>
    <nav className='bg-gray-50'>
      <a
        className='navbar-brand flex flex-col justify-center items-center'
        href='/'>
        <img src={Logo2} className='' width={80} height={80} alt='small logo' />
        <span className='text-2xl text-blue-900'>Blogster</span>
      </a>
      
    </nav>

    </>
  );
};

export default Header;
