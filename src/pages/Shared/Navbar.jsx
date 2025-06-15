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
      <li><NavLink to="/"  className={({ isActive }) =>
      isActive
        ? 'text-orange-500 font-bold'
        : 'text-gray-500 font-bold'
    }>Home</NavLink></li>
      <li><NavLink to="/events"  className={({ isActive }) =>
      isActive
        ? 'text-orange-500 font-bold '
        : 'text-gray-500 font-bold'
    }>Events Page</NavLink></li>

</>

const profileMenu = (
  <ul className="p-2 shadow menu dropdown-content bg-blue-800 text-white rounded-box w-52 mt-2 z-[1000]">
    <li><NavLink to="/book-event"    className={({ isActive }) =>
      isActive ? 'font-bold text-orange-300' : 'font-bold'
    }
  >Book Event</NavLink></li>
    <li><NavLink to="/myBookings"   className={({ isActive }) =>
      isActive ? 'font-bold text-orange-300' : 'font-bold'
    }
  >My Bookings</NavLink></li>
    {user 
    // ?.role === 'organizer'
     && <>
      <li><NavLink to="/create-event" className={({ isActive }) =>
      isActive ? 'font-bold text-orange-300' : 'font-bold'
    }
>Create Events</NavLink></li>
      <li><NavLink to="/manageEvents" className={({ isActive }) =>
      isActive ? 'font-bold text-orange-300' : 'font-bold'
    }
>Manage Events</NavLink></li>
      </>
    }
  </ul>
);
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-8 pb-4">
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
              <button onClick={handleLogOut} className="btn btn-outline bg-red-500 text-white btn-sm">Logout</button>
            </>
          ) : (
            <>
              <NavLink className="btn  bg-orange-500 text-white" to="/register">Register</NavLink>
              <NavLink className="btn  bg-orange-500 text-white" to="/logIn">LogIn</NavLink>

            </>
          )}

      </div>
    </div>
  );
};

export default Navbar;