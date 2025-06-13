import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottie from '../../assets/lotties/register.json'
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Register = () => {

  const {createUser, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value.trim();

    console.log(email,password,name,photo)
    if (!name || !email || !photo || !password) {
      return Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: 'Please fill out all the fields.',
      });
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Weak Password',
        text: 'Password must be at least 6 characters long and include uppercase and lowercase letters.',
      });
    }


    createUser(email, password)
    .then(result => {
      // Update profile with name & photo
      updateUserProfile(name, photo)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful!',
            text: 'You are now registered.',
            showConfirmButton: false,
            timer: 3000,
            position: 'top-end'
          });
          form.reset();
          navigate('/');
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Profile Update Failed',
            text: error.message,
          });
        });
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message,
      });
    });
};
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