import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottie from '../../assets/lotties/register.json'
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

    // createUser
    createUser(email, password)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '200px' }} animationData={registerLottie} loop={true}></Lottie>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input text-black dark:text-white" placeholder="Name"  />
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className='label'>Profile Picture URL</label>
                <input type="PhotoURL" name="photo"   className='input' placeholder='Profile Picture URL'/>
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div>
                <button className="btn border-none mt-4 bg-blue-900 text-white w-full hover:bg-amber-600">Register</button></div>
              </fieldset>

            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;