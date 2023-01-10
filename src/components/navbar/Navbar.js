import React, {useState} from 'react';
import './Navbar.css';
import {AiOutlineBars} from 'react-icons/ai';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);  
    };

  return (

    <div className='navbar'>

        <div className='container'>

            <h1> <span> <BsFillHouseFill /> Real</span>Estate </h1>

            <button className='btn'> Start Here! </button>

            <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>

                <li> <a href="/"> Home </a> </li>

                <li> <a href="/"> Search </a> </li>

                <li> <a href="/"> About </a> </li>

                <li> <a href="/"> Contact </a> </li>

            </ul>

            <div className='hamburger__menu' onClick={handleClick}>

                {menuOpen ? (<FaRegTimesCircle className='icon'/>) : (<AiOutlineBars className='icon'/>)}
                
            </div>

        </div>

    </div>

  );

};

export default Navbar;