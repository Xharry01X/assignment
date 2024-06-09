import React from 'react';
import logo from '../../assets/pngwing.com.png';
import { FaRegUserCircle } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <div className='container'>
      <nav>
        <div className='logo-container'>
          
          <img src={logo} alt='logo'/>
          <a href="/">
          <p className='logo'>Imaginary</p>
          </a>
        </div>
        <ul>
          <li><a href="/upload">Upload</a></li>
          
          <li><a href="/login">
            <FaRegUserCircle size={24}/>
            </a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;