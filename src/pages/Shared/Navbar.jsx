import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { FaRunning } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import defaultProfile from '../../assets/images/defaultProfile.jpg';


const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log('log Out user')
        navigate('/');
      })
      .catch(error => {
        console.log(error)
      })
  }

  const links =
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/events">Events Page</NavLink></li>

</>

const profileMenu = (
  <ul className="p-2 shadow menu dropdown-content bg-blue-800 text-white rounded-box w-52 mt-2 z-[1000]">
    <li><NavLink to="/book-event">Book Event</NavLink></li>
    <li><NavLink to="/myBookings">My Bookings</NavLink></li>
    {user?.role === 'organizer' && (
      <li><NavLink to="/manage-events">Manage Events</NavLink></li>
    )}
  </ul>
);
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
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
          <span className='text-orange-600  text-3xl'><FaRunning /></span>ATHLOF<span className='text-orange-600 text-5xl'>Y</span>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {
          user ? (
            <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
              <div className="avatar cursor-pointer">
              <div className="w-10 h-10 rounded-full border-2 border-orange-500">
                <img
                  src={user.photoURL || defaultProfile}
                  alt="Profile"
                 
                />
              </div>
              </div>
              </div>
              {profileMenu}
</div>
              <button onClick={handleLogOut} className="btn btn-outline btn-sm">Logout</button>
            </>
          ) : (
            <>
              <NavLink className="btn btn-sm" to="/register">Register</NavLink>
              <NavLink className="btn btn-sm" to="/logIn">LogIn</NavLink>

            </>
          )}

      </div>
    </div>
  );
};

export default Navbar;