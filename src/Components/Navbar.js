import React from 'react'
import { HiOutlineUserPlus } from "react-icons/hi2";
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  // const mobileMenu = document.getElementById('mobile-menu');
  // const navbarNav = document.querySelector('.navbar-nav');
  
  // mobileMenu.addEventListener('click', () => {
  //     navbarNav.classList.toggle('active');
  // });
  
    return (
      <>
        <div>
      <nav className="navbar">
      <div className="navbar-brand">LOGO</div>
      <ul className='navsection'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>About</li>
        <li className='nav-item'>Services</li>
       
        {/* <button  className='nav-item' type='submit' >Register/Login</button> */}
        <li className='nav-item'>
        <Link to="/login" className='nav-item' >Login</Link>
        <Link to="/register" className='nav-item' >Register</Link>
        </li>
        <li className='nav-item'><HiOutlineUserPlus /> </li>
      </ul>
      <div className="navbar-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>


    </div>
      </>
    )
}

export default Navbar