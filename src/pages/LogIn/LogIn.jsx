import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import logInLottie from '../../assets/lotties/logIn.json'
import Lottie from 'lottie-react';
import SocialLogin from '../Shared/SocialLogin';
import { NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const LogIn = () => {

    const {logInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
   
    
      const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
    
        // login User
        logInUser(email, password)
        .then(result => {
            console.log(result.user)
             Swal.fire({
                        icon: 'success',
                        title: 'Login Successful!',
                        text: 'Welcome back! You have successfully logged into your account.',
                        showConfirmButton: false,
                        timer: 3000,
                        position: 'top-end'
                      });
                      form.reset();
            navigate(from)
        })
        .catch(error => {
            console.log(error)
        })
       
      }
    return (
        <div className="hero bg-[#f5f0ec] min-h-screen">
        <div className="hero-content gap-3 flex-col lg:flex-row-reverse md:ml-20">
          <div className="text-center lg:text-left">
            <Lottie style={{ width: '300px' }} animationData={logInLottie} loop={true}></Lottie>
  
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-blue-950 py-4">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">LogIn now!</h1>
              <p className="text-sm text-center dark:text-gray-200">Don't have account?{' '}
            <NavLink to="/register" className="focus:underline   hover:underline text-amber-600">Register here</NavLink>
        </p>
              <form onSubmit={ handleLogIn }>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" name='email' className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input type="password" name='password' className="input" placeholder="Password" />
                  <div><a className="link link-hover">Forgot password?</a></div>
                  <button className="btn  mt-4 bg-blue-900 text-white">LogIn</button>
                </fieldset>
              </form>
              <SocialLogin from={from}></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;