import './NavbarStyle.css'
import React from 'react';
import Logo from './Logo.svg';
import Cart from './CartButton.png';
import Search from './SearchButton.svg';
import Profile from './ProfileButton.png';
function Navbar()
{
   return (
      <div className="navbar">
         <div className='container'>
               <div className="left-side">
                     <ul>
                        <li>Shop</li>
                        <li>Products</li>
                        <li>Support</li>
                     </ul>
               </div>
               <div className='center-logo'>
                  <img src={Logo} alt="Logo" />
               </div>
               <div className="right-side">
                  <ul>
                     <li>
                        <img src={Profile} alt='ProfileButton' />
                     </li>
                     <li><img src={Search}  alt ='SearchButton'/></li>
                     <li><img src={Cart} alt = 'CartButton'/></li>
                  </ul>
               </div>
         </div>
      </div>

   );
}

export default Navbar;