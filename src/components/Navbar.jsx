import { useContext } from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";


const Navbar = () => {
    const {myUser} = useContext(authContext)
console.log(myUser);

  const activeClass = ({ isActive }) => {

    return isActive 
      ? "bg-white text-indigo-600 px-4 py-2 rounded-md shadow font-bold transition-all"
      : "text-white px-4 py-2 rounded-lg hover:shadow-lg duration-300 hover:bg-white hover:text-indigo-600 transition-all";
  }
    const linkClass02 = ({isActive}) =>   `px-2 rounded transition-colors  duration-200 text-[22px] ${isActive ? 'bg-[#9538E2] text-white' : 'hover:text-[#9538E2] text-gray-700'}`

  return (
    <>

    <nav className="hidden sm:block">
        <div className="flex gap-2 font-medium text-lg">
            <NavLink to='/' className={activeClass}>Home</NavLink>
            <NavLink to='/start-learning' className={activeClass}>Start Learning</NavLink>
        </div>
    </nav>
    
    <div className="sm:hidden block">
      <input type="checkbox" id="Bars" className="peer hidden" />

      <label htmlFor="Bars" className="cursor-pointer">
        <FaBarsProgress className="text-gray-600" size={18} />
      </label>

      <nav className="bg-white hidden peer-checked:flex flex-col gap-2 w-full text-left absolute left-0 shadow-xl p-4 mt-3 z-50">
        <NavLink to="/" className={linkClass02}>Home</NavLink>
        <NavLink to="/start-learning" className={linkClass02}>Start Learning</NavLink>
        
        {
                            myUser && <NavLink to='/profile' className={linkClass02}>My-profile</NavLink>
                        }
      </nav>
    </div>



    </>
  );
};

export default Navbar;
