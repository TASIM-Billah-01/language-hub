import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo1.jpeg'
import user from '../assets/user.png'
import Navbar from './Navbar';
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';


const Header = () => {
    const {logOut, myUser, loading} = useContext(authContext)
    
      
    const activeClass = ({ isActive }) => {
    return isActive 
      ? "bg-white text-indigo-600 px-4 py-2 rounded-md shadow font-bold"
      : "text-white px-4 py-2 rounded-lg hover:shadow-lg duration-300 hover:bg-white hover:text-indigo-600 transition-all";
  }
    return (
        <header className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">
            <section className="flex justify-between items-center sm:px-6 px-4 py-3 sm:py-4 max-w-[1200px] mx-auto">

                <img src={logo} alt="Logo" className='h-8 w-10 sm:h-[60px] sm:w-[80px] xl:h-[80px] xl:w-[100px] rounded sm:rounded-md sm:shadow-lg' />
                <nav className="hidden sm:block">
                    <div className="flex items-center gap-2 font-medium text-lg">

                        <NavLink to='/' className={activeClass}>Home</NavLink>
                        <NavLink to='/start-learning' className={activeClass}>Start Learning</NavLink>
                        {
                            myUser && <NavLink to='profile' className={activeClass}>My-profile</NavLink>
                        }
                    </div>
                </nav>
                <div className='flex items-center gap-3'>
                    {
                        myUser 
                        ? <article className='flex items-center gap-3'>
                            <img src={myUser?.photoURL} alt=""  className='sm:w-10 w-8 h-8 sm:h-10 bg-white rounded-full border-2 border-gray-300 shadow-sm'/>
                            <button onClick={logOut} className='font-semibold text-base xl:text-lg text-white bg-red-500 px-4 py-1.5 rounded-lg hover:bg-red-600 transition-all'>
                            Logout
                            </button>
                        </article> 
                        : <article className='flex items-center gap-3'>
                            <img src={user} alt="User" className='sm:w-10 w-8 h-8 sm:h-10 bg-white rounded-full border-2 border-gray-300 shadow-sm' />
                            <button onClick={logOut} className='font-semibold text-base xl:text-lg text-white bg-red-500 px-4 py-1.5 rounded-lg hover:bg-red-600 transition-all'>
                            Login
                            </button>
                        </article> 
                    }

                </div>

                <section className='sm:hidden'>
                    <Navbar></Navbar>
                </section>
            </section>
        </header>
    );
};

export default Header;
