import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'className="w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
      <p className ="blue-gradient_text">Divya</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-blue-800" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-blue-800"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-blue-800"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
