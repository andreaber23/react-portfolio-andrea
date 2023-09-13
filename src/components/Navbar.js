import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={()=> {
                setExpandNavbar((prev) => !prev)
                }}>
            <MenuIcon/></button>
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
