// import { useContext } from "react";
// import { authContext } from "../provider/AuthProvider";
// import { signOut, updateProfile } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";
// import { useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
    const {createUser} = useContext(authContext)
    const [errorText, setErrorText] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();
        setErrorText('')
        setSuccess(false);
        const name = e.target.name.value;
        const password = e.target.password.value;
        const Cpassword = e.target.Cpassword.value;
        const email = e.target.email.value;
        const photo= e.target.photo.value;            
        if(password.length < 6) {
          return setErrorText("password should be more then 6 character long ")
        }
        if(password !== Cpassword) {
          return setErrorText("password didn't match ")
        }
        createUser(email,password)
        .then(() => {

          updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : photo
          }).then(() => {
            setSuccess(true)
            // navigate('/')
          })
               .then(() => {
        signOut(auth).then(() => {
        navigate('/'); 
      })
    })
        })
        .catch(error => {
          setErrorText(error.message)
        })
        
    }
  return (
    <div>
      <section className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-red-100 py-8 px-4 sm:py-12 sm:px-0">
        <section className="px-6 shadow-2xl rounded-2xl bg-white w-full max-w-lg py-12">
          
          <h2 className="text-lg sm:text-3xl font-semibold text-center mb-6 text-gray-700">
            Create an Account
          </h2>

          <form className="space-y-3 sm:space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-600 mb-2 text-sm sm:text-base block font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 text-sm sm:text-base rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 text-sm sm:text-base block font-medium">Your Email</label>
              <input
                type="text"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-gray-600 mb-2 text-sm sm:text-base block font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="w-full border border-gray-300 rounded-lg px-4 text-sm sm:text-base py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Paste image link"
              />
            </div>

            <div>
              <label className="text-gray-600 mb-1 text-sm sm:text-base block font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 rounded-lg px-4 text-sm sm:text-base py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="text-gray-600 mb-1 text-sm sm:text-base block font-medium"> Confirm Password</label>
              <input
                type="password"
                name="Cpassword"
                className="w-full border border-gray-300 rounded-lg px-4 text-sm sm:text-base py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Confirm password"
              />
            </div>

            <div>
              <input
                type="submit"
                value="Create Account"
                className="w-full bg-red-500 text-white text-sm sm:text-base font-medium py-2 rounded-lg hover:bg-red-600 transition-all duration-200 cursor-pointer shadow-md"
              />
            </div>
          </form>
        <p className="text-gray-600 mt-4">
            Already have an account?{' '}
            <Link 
            to="/login" 
            className="text-indigo-600 font-semibold hover:text-indigo-800 hover:underline transition-colors duration-300">
            Login
            </Link>
        </p>
        {
          errorText && <p className="text-red-600 font-medium ">{errorText}</p>
        }
        {
          success && <p className="text-green-600 font-medium ">Successfully Created!</p>
        }
        </section>
      </section>
    </div>
  );
};

export default Register;
