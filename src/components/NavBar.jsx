

import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="mb-10">
      <nav>
        <div className="grid grid-cols-4 gap-5 w-full text-white bg-gradient-to-r from-blue-900 to-gray-700 py-5">
            
          {/* Logo */}

          <div className=" col-span-1 text-3xl font-bold w-fit mx-auto">
            LOGO
          </div>

          {/* Menu */}
          
          <div className=" col-span-3">
            <ul className="w-fit mx-auto">
                <li className="text-xl font-bold inline-block px-5"><NavLink to='/'>Home</NavLink></li>
                <li className="text-xl font-bold inline-block px-5"><NavLink to='/create-student'>Create Student</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
