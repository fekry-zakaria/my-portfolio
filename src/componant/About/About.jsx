
import React, { useContext , useEffect, useRef} from "react";
import { ThemeContext } from "../../context/themContext";
import * as THREE from "three";
import { motion } from "framer-motion";


function About() {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext);


const techs = [
  { name: "HTML", icon: "/html-5-svgrepo-com.svg", info: "Used in 10+ projects" },
  { name: "CSS", icon: "/css-3-svgrepo-com.svg", info: "Styled multiple responsive UIs" },
  { name: "JavaScript", icon: "/javascript-logo-svgrepo-com.svg", info: "Strong logic + 15+ projects" },
  { name: "React", icon: "/reactjs-svgrepo-com.svg", info: "Built dynamic SPAs" },
  { name: "Next.js", icon: "/nextjs-svgrepo-com (1).svg", info: "SSR & routing experience" },
  { name: "Node.js", icon: "/nodejs-1-logo-svgrepo-com.svg", info: "Backend APIs & auth" },
  { name: "Express", icon: "/express-svgrepo-com.svg", info: "REST APIs & middleware" },
  { name: "MongoDB", icon: "/mongodb-svgrepo-com.svg", info: "NoSQL + Mongoose" },
  { name: "Git", icon: "/git-svgrepo-com.svg", info: "Version control daily" },
  { name: "GitHub", icon: "/github-svgrepo-com.svg", info: "Code hosting & PRs" },
  { name: "Postman", icon: "/postman-icon-svgrepo-com.svg", info: "Tested 20+ APIs" },
  { name: "Figma", icon: "/figma-svgrepo-com.svg", info: "UI/UX collaboration" },
];

  

    return ( <>
  
    
<div className="container mx-auto py-10 pt-20 font-inter" id="about">





  <div className="flex flex-col md:flex-row">
  <motion.div
  className="md:w-2/3 p-5"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h1 className={` text-2xl md:text-4xl font-bold ${themeName === "dark" ? "text-white" : "text-[#2b2928]"}`}>
    LET ME <span className="text-gray-300 font-bold"> INTRODUCE </span> MYSELF
  </h1>
  <p className={`mt-4 text-lg md:text-xl font-bold ${themeName === "dark" ? "text-white" : "text-[#2b2928]"}`}>
    I'm a graduate of the <b className="text-gray-300 font-bold">Information Technology Institute (ITI)</b>, where I completed the <b className="text-gray-300 font-bold">Full Stack Web Development track (MERN stack)</b>. During this intense program, I honed my skills in both frontend and backend development.
    <br /><br />
    As part of my journey, I worked on several real-world projects, including a major graduation project — a <b className="text-gray-300  font-bold">Udemy Clone</b> — where I implemented core functionalities such as user authentication, video playback, course creation, and a responsive user experience.
    <br /><br />
    I’m passionate about technology and innovation. With a strong foundation in 
    <i><b className="text-gray-300 font-bold"> C++, C, JavaScript, and Object-Oriented Programming (OOP)</b></i>, I thrive on solving complex problems and creating efficient solutions.
    <br /><br />
    I particularly enjoy building scalable applications using 
    <b className="text-gray-300 font-bold"> Node.js</b> and leveraging 
    <i><b className="text-gray-300  font-bold"> modern JavaScript libraries and frameworks</b></i> such as 
    <i><b className="text-gray-300  font-bold"> React.js and Next.js</b></i>. My goal is to create impactful digital experiences that enhance user engagement and drive innovation.
  </p>
</motion.div>

    <div className="md:w-1/3 p-5 flex justify-center items-center">
      <div>
      <div>
        <img className="rounded-full " src='https://png.pngtree.com/png-vector/20230728/ourlarge/pngtree-coder-clipart-boy-working-with-computer-game-on-the-desk-vector-png-image_6804917.png' alt="Fekry"   loading="lazy" />
      </div>
      </div>
    </div>
  </div>
  <div className="container mx-auto mt-20">
  <h2 className={`text-3xl font-bold mb-10 text-center ${themeName === "dark" ? "text-white" : "text-[#2b2928]"}`} >Tech Stack</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
    {techs.map((tech, index) => (
      <motion.div
        key={index}
        className="relative group"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
            loading="lazy"
          className="w-16 h-16 transition-transform duration-300 transform group-hover:scale-110"
        />
        <p className="mt-2 text-sm text-center text-[#2b2928] dark:text-white font-semibold">
          {tech.name}
        </p>

        {/* Tooltip */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
          {tech.info}
        </div>
      </motion.div>
    ))}
  </div>
</div>



</div>
    </> );
}

export default About;