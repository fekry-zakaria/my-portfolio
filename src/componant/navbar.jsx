import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineConnectWithoutContact } from "react-icons/md";


import { FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../context/themContext";
import { FiSun, FiMoon } from "react-icons/fi";


export default function  Tast()  {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        navColor ? "backdrop-blur-lg bg-gray-900/50  shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        
        {/* Logo */}
        <Link to="/" className="flex items-center">
        {themeName === 'dark' ? <img className="w-12 h-12" src="/logo5.png" alt="" /> :<img className="w-12 h-12" src="/logo6.png" alt="" />}
        </Link>

        <div
						onClick={toggleTheme}
						aria-label="Theme Switcher"
						className=" bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer md:hidden"
					>
						{themeName === 'dark' ? (
              <FiSun className="text-yellow-300 hover:text-yellow-500 text-xl" />
					
						) : (
							
<FiMoon className="text-gray-300 hover:text-gray-400 dark:text-gray-100 dark:hover:text-gray-200 text-xl" />

						)}
					</div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-10 text-white `}>
        <Link
    to="/"
    className={`relative text-2xl flex items-center after:absolute after:left-0 after:bottom-0 after:w-full after:h-[5px]    ${themeName === "dark" ?" after:bg-gray-300" :"after:bg-[#2b2928]"}  after:scale-x-0 after:transition-transform after:duration-400 after:origin-left hover:after:scale-x-100`}
  >
    <AiOutlineHome className="mr-1" /> Home
  </Link>
  <Link
    to="About"
    className={`relative text-2xl flex items-center after:absolute after:left-0 after:bottom-0 after:w-full after:h-[5px]    ${themeName === "dark" ?" after:bg-gray-300" :"after:bg-[#2b2928]"}  after:scale-x-0 after:transition-transform after:duration-400 after:origin-left hover:after:scale-x-100`}
  >
    <AiOutlineUser className="mr-1" /> About
  </Link>
  <Link
    to="Projects"
    className={`relative text-2xl flex items-center after:absolute after:left-0 after:bottom-0 after:w-full after:h-[5px]    ${themeName === "dark" ?" after:bg-gray-300" :"after:bg-[#2b2928]"}  after:scale-x-0 after:transition-transform after:duration-400 after:origin-left hover:after:scale-x-100`}
  >
    <AiOutlineFundProjectionScreen className="mr-1" /> Projects
  </Link>

  <Link
    to="contact"
    className={`relative text-2xl flex items-center after:absolute after:left-0 after:bottom-0 after:w-full after:h-[5px]    ${themeName === "dark" ?" after:bg-gray-300" :"after:bg-[#2b2928]"}  after:scale-x-0 after:transition-transform after:duration-400 after:origin-left hover:after:scale-x-100`}
  >
    <MdOutlineConnectWithoutContact className="mr-1 " /> Contact
  </Link>

<div
						onClick={toggleTheme}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{themeName === 'dark' ? (
			              <FiSun className="text-yellow-300 hover:text-yellow-500 text-xl" />


							
						) : (
						
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />

						)}
					</div>


        </div>



        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${themeName == 'dark' ? "text-white" : "text-[#2b2928]"} `}
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FiX size={28} /> : <FiMenu size={28}  />}
        </button>
        
      </div>

      {/* Mobile Menu */}
      <div
  className={`absolute top-0 left-0 w-full bg-gray-900 flex flex-col items-center py-10 text-white transform transition-all duration-500 ease-in-out md:hidden
    ${navOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-full opacity-0 scale-95 pointer-events-none"}
  `}
>


  <button className="absolute top-4 right-4 border-2 border-purple-600 group hover:border-purple-600 w-12 h-12 duration-500 overflow-hidden" 
  onClick={() => setNavOpen(false)}
  type="button">
      <p className="font-Manrope text-4xl  text-white duration-500  z-10 group-hover:scale-0">
        ×
      </p>
      <span className="absolute w-full h-full bg-purple-600 rotate-45 group-hover:top-9 duration-500 top-12 left-0" />
      <span className="absolute w-full h-full bg-purple-600 rotate-45 top-0 group-hover:left-9 duration-500 left-12" />
      <span className="absolute w-full h-full bg-purple-600 rotate-45 top-0 group-hover:right-9 duration-500 right-12" />
      <span className="absolute w-full h-full bg-purple-600 rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0" />
    </button>

  <Link to="/" onClick={() => setNavOpen(false)} className="text-3xl flex items-center space-x-2 hover:text-gray-400">
    <AiOutlineHome /> <span >Home</span>
  </Link>
  <Link to="About" onClick={() => setNavOpen(false)} className="text-3xl flex items-center space-x-2 hover:text-gray-400">
    <AiOutlineUser /> <span>About</span>
  </Link>
  <Link to="Projects" onClick={() => setNavOpen(false)} className="text-3xl flex items-center space-x-2 hover:text-gray-400">
    <AiOutlineFundProjectionScreen /> <span>Projects</span>
  </Link>
 
  <Link to="contact" onClick={() => setNavOpen(false)} className="text-3xl flex items-center space-x-2 hover:text-gray-400">
    <MdOutlineConnectWithoutContact /> <span>Contact</span>
  </Link>
</div>
    </nav>
    </>

  );
};


