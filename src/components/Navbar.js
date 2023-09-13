import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button> {" "}<MenuIcon/></button>
        </div>
        <div className='links'>
            <Link to='/'>  Home  </Link>
            <Link to='/about'> About </Link>
            <Link to='/portfolio'> Portfolio   </Link>
            <Link to='/contact'> Contact </Link>
            <Link to='/resume'>  Resume  </Link>
        </div>
    </div>
  )
}

export default Navbar
