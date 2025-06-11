import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import Icon from '../../assets/icons/logoicon.png'
import { FaRunning } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Navbar = () => {

  const {user, logOutUser} = useContext(AuthContext)

  const handleLogOut = () => {
    logOutUser()
    .then(()=> {
      console.log('log Out user')
    })
    .catch(error => {
      console.log(error)
    })
  }

    const links = 
    <>
    <li><NavLink to="/">Home</NavLink></li>
    
    
    
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
    
   
    <div className="flex text-2xl font-bold items-center pt-3 text-blue-900"> 
      <span className='text-orange-600  text-4xl'><FaRunning /></span>Athlof<span className='text-orange-600 text-3xl'>Y</span>
      </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {
    links
   }
    </ul>
  </div>
  <div className="navbar-end">
{
  user ? <button onClick={handleLogOut} className='btn'>Log Out</button> : 
  <>
   <NavLink className="btn" to="/register">Register</NavLink>
   <NavLink className="btn" to="/logIn">LogIn</NavLink>
  
  </>
}

  </div>
</div>
    );
};

export default Navbar;