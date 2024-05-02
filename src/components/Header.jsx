import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.svg';
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

 
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);

    };
  
    return (
      <header className=" text-white py-4 absolute w-full shadow-1">

    <div className= {` ${menuOpen ? 'h-max' : 'h-auto'} container transition-height items-baseline mx-auto flex  flex-col  md:flex-row md:items-center justify-between`} >
        <div className="w-full md:w-max flex justify-between" >
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 mr-4" />
            <span className="text-xl font-mono">Peixoto</span>
          </div>
  
          <button
            className="block md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="p-2 ">
              {menuOpen ? (
                  <IoMdClose size='2rem'/>
                ) : (
                  <IoIosMenu size='2rem'/>
              )}
            </div>
                  </button>
  
        </div>
          <nav className={` pt-8 w-full font-mono text-lg md:pt-0 md:w-max md:flex ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex">
              <li className="md:mr-6 mb-3 md:mb-0">
                <Link
                  to="/"
                  className="flex gap-1 p-2 rounded hover:bg-gray-700 hover:bg-opacity-50"
                >
                    <span className="text-primary">
                        #
                    </span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projetos"
                  className="flex gap-1 p-2 rounded hover:bg-gray-700 hover:bg-opacity-50"
                >
                     <span className="text-primary">
                        #
                    </span>
                  Projetos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;