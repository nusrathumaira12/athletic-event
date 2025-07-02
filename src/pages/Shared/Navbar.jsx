import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router'; 
import { FaRunning } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import defaultProfile from '../../assets/images/defaultProfile.jpg';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [latestEvent, setLatestEvent] = useState(null);

  useEffect(() => {
    fetch('https://athletic-event-server.vercel.app/events')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setLatestEvent(data[0]); // Or sort by date for the newest one
        }
      })
      .catch(err => console.error('Failed to fetch latest event', err));
  }, []);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log('User logged out');
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-orange-500 font-bold' : 'text-gray-500 font-bold dark:text-white'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? 'text-orange-500 font-bold' : 'text-gray-500 font-bold  dark:text-white'
          }
        >
          Events Page
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/create-event"
            className={({ isActive }) =>
              isActive ? 'text-orange-500 font-bold' : 'text-gray-500 font-bold dark:text-white'
            }
          >
            Create Event
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-orange-500 font-bold' : 'text-gray-500 font-bold dark:text-white'
          }
        >
          About Athlofy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-orange-500 font-bold' : 'text-gray-500 font-bold dark:text-white'
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/privacy"
          className={({ isActive }) =>
            isActive ? 'text-orange-500 font-bold' : 'text-gray-500 font-bold dark:text-white'
          }
        >
         Privacy
        </NavLink>
      </li>
     
    </>
  );

  const profileMenu = (
    <ul className="p-2 shadow menu dropdown-content bg-blue-800 text-white rounded-box w-52 mt-2 z-[1000]">
      {latestEvent && (
  <li>
    <NavLink
      to={`/events/${latestEvent._id}`}
      className={({ isActive }) =>
        isActive ? 'font-bold text-orange-300' : 'font-bold'
      }
    >
      Book Event
    </NavLink>
  </li>
)}

      <li>
        <NavLink
          to="/myBookings"
          className={({ isActive }) =>
            isActive ? 'font-bold text-orange-300' : 'font-bold'
          }
        >
          My Bookings
        </NavLink>
      </li>
      {user && (
        <>
          
          <li>
            <NavLink
              to="/manageEvents"
              className={({ isActive }) =>
                isActive ? 'font-bold text-orange-300' : 'font-bold'
              }
            >
              Manage Events
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm pr-7 md:px-12 pb-4">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 dark:bg-blue-800  dark:text-white rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <div className="flex text-2xl font-bold items-center pt-3 text-blue-900 dark:text-orange-600">
          <span className="text-orange-600 dark:text-white text-3xl">
            <FaRunning />
          </span>
          ATHLOF<span className="text-orange-600 dark:text-white text-5xl">Y</span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
                <div className="avatar cursor-pointer">
                  <div className="w-10 h-10 rounded-full border-2 border-orange-500">
                    <img src={user.photoURL || defaultProfile} alt="Profile" />
                  </div>
                </div>
              </div>
              {profileMenu}
            </div>
            <button onClick={handleLogOut} className="btn btn-outline   text-orange-600 ">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink className="btn bg-orange-500 text-white" to="/register">
              Register
            </NavLink>
            <NavLink className="btn bg-orange-500 text-white" to="/logIn">
              LogIn
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
