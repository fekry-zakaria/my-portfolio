import { useContext } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ThemeContext } from "../../context/themContext";
import { motion } from "framer-motion";

function Projects() {
  const [{ themeName }] = useContext(ThemeContext);

  const projects = [
    {
      name: "Twitter Clone",
      img: "/twitterClone2.jpg",
      linkGit: "https://github.com/fekry-zakaria/Project-Twitter-Clone",
      linkWeb: "https://twitter-clone-fekry.vercel.app/",
    },
    {
      name: "Talabat Clone",
      img: "/talbat.jpg",
      linkGit: "https://github.com/example",
      linkWeb: "https://example.com/",
    },
    {
      name: "Udemy Clone",
      img: "/udemy.png",
      linkGit: "https://github.com/mahmoud358/udemy-next",
      linkWeb: "https://udemy-next-nu.vercel.app/",
    },
    {
      name: "smar-ch",
      img: "/smarch.jpg",
      linkGit: "https://github.com/Rabab17/FrontsEndSmarch",
      linkWeb: "https://smar-ch.com/",
    },
    {
      name: "Udemy Backend",
      img: "/udemyBackend.png",
      linkGit: "https://github.com/mahmoud358/udemy-backend",
      linkWeb: "https://github.com/mahmoud358/udemy-backend",
    },
  ];

  return (
    <>
      <div className="pt-30 text-center">
        <h1 className={`text-4xl md:text-5xl font-bold ${themeName === "dark" ? "text-white" : "text-[#2b2928]"}`}>
          My Recent Works
        </h1>
        <br />
        <p className={`text-xl md:text-2xl font-bold text-gray-300`}>
          Here are a few projects I've worked on recently
        </p>
      </div>

      <div className="container mx-auto">
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group w-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <img
                loading="lazy"
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center gap-4">
                <h1 className="text-white text-2xl font-bold">{project.name}</h1>
                <a
                  href={project.linkGit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-gray-300 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.linkWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-gray-300 transition"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
