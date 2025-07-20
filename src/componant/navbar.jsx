import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";



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
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto"; // احتياطي لما يتغير
    };
  }, [navOpen]);
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

      <div
  className={`fixed inset-0 z-50 bg-white h-screen overflow-y-auto flex flex-col items-center pt-20 transition-all duration-500 ease-in-out md:hidden 
  ${navOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-full opacity-0 scale-95 pointer-events-none"}`}
>
  {/* Close Button */}
  <button
    className="absolute top-9 right-6 text-3xl text-gray-800 hover:text-gray-500 transition"
    onClick={() => setNavOpen(false)}
    type="button"
  >
    <TfiClose />

  </button>

  {/* Logo */}
  <div className="absolute top-6 left-6 flex items-center space-x-2">
    <img src="/logoWeb.jpg" width={60} height={60} alt="" />
    
  </div>

  {/* Links */}
  <div className="flex flex-col items-center space-y-6 text-gray-400 text-2xl mt-10 font-mono">
    <Link to="/" onClick={() => setNavOpen(false)} className="hover:text-gray-700">Home</Link>
    <Link to="/about" onClick={() => setNavOpen(false)} className="hover:text-gray-600">About</Link>
    <Link to="/projects" onClick={() => setNavOpen(false)} className="hover:text-gray-600">Projects</Link>
    <Link to="/contact" onClick={() => setNavOpen(false)} className="hover:text-gray-600">Contact</Link>
  </div>

  {/* Download CV Button */}
  <a
  href="/Fekry Zakaria Fekry.pdf"
  download
  className="mt-6 cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#2b2928] group px-8 py-2 inline-block"
>
  <span className="relative z-10 text-[#2b2928]  group-hover:text-white text-xl duration-500">
    Download CV
  </span>

  {/* الشرائح اللي بتدخل من الجوانب */}
  <span className="absolute w-full h-full bg-[#2b2928] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
  <span className="absolute w-full h-full bg-[#2b2928] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
</a>

</div>

    </nav>
    </>

  );
};


