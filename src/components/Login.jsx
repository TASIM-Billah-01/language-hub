import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
// import { useState } from "react";
import google from '../assets/google.jpeg'

const Login = () => {
  const {setMyUser, loginUser,googleSignIn} = useContext(authContext)
  const [error, setError] = useState('')
  const pathLocation = useLocation();
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')
      const email = e.target.email.value;
      const password = e.target.password.value;    
      loginUser(email, password)
      .then((res) => {
        setMyUser(res.user)
        navigate(pathLocation.state)
      }).catch(error => {
        console.log(error.message);
        setError(error.message)
      })

  }      

//   const handleGoogleLogin = () => {
//   googleSignIn()
//     .then(() => {
//       // navigate(pathLocation.state || "/");
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
  // const handleGoogleLogin = () => {
  // googleSignIn()
  // .then(() => {
  //       // console.log(result.user);
        
  //       //   setMyUser(result.user);   
  //       //   setLoading(false);


  //     })
  //     .catch(error => {
  //         setLoading(false);
  //         console.log(error);
  //     });
    // .then((user) => {
    //   console.log(user);
      
    //   // navigate(pathLocation.state || "/");
    // })
    // .catch(err => console.log(err));
// };

  return (
    <div>
      <section className="min-h-screen bg-gradient-to-b from-gray-300 to-blue-100 flex justify-center items-center px-4 py-8 xl:px-6">
        <section className="py-6 sm:py-8 xl:py-12 px-6 max-w-lg xl:max-w-2xl bg-white w-full rounded-md sm:rounded-lg shadow-xl">
          
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-600 mb-1 block font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-gray-600 mb-1 block font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition-all hover:scale-[1.02] duration-200 shadow-md"
              >
                Login
              </button>
            </div>
          </form>
        <p className="text-gray-600 mt-4">
            Didn't have an account?{' '}
            <Link 
            to="/register" 
            className="text-indigo-600 font-semibold hover:text-indigo-800 hover:underline transition-colors duration-300">
            Register
            </Link>
        </p>
        <div className="border-t-2 border-gray-200 mt-2"></div>
       
<button 
  onClick={() => {
    googleSignIn()
      .then(() => {
        navigate(pathLocation.state);
      })
      .catch(err => console.log(err));
  }} 
  className="flex items-center justify-center rounded-full px-4 py-2 max-w-sm mx-auto text-gray-700 xl:text-base font-medium hover:text-gray-900"
>
  <img src={google} alt="Google Logo" className="w-8 xl:w-10 h-8 xl:h-10 rounded-full mr-2" />
  Login with Google
</button>


        <p className="text-red-500 text-center">{error}</p>
        </section>
      </section>
    </div>
  );
};

export default Login;
