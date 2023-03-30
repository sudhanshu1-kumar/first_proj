import React from 'react'
import './Naavbar.css'

import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <div className='nevbar'>
    
    <nav className='navbar'>
      
    
  <ul>
    <li>
       <Link to="/">Home</Link>
      </li>
    <li>
      <Link to="/About">About us</Link>
      </li>
    <li>
      <Link to="/Prog">programs</Link>
      </li>
    <li>
      <Link to="/Course">Courses</Link>
      </li>
    <li>
      <Link to="/Contact">Contact</Link>
      
      </li>
        <li>
            <Link to="/Login">Login</Link>
        
        </li>
   
      
     
        </ul>
      </nav>
      
      
      
      </div>
      
  </>
    
  )
}

export default Navbar
