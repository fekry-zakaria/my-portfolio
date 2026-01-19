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
      linkWeb: "https://fronts-end-smarch.vercel.app/",
    },
    {
      name: "Udemy Backend",
      img: "/udemyBackend.png",
      linkGit: "https://github.com/mahmoud358/udemy-backend",
      linkWeb: "https://github.com/mahmoud358/udemy-backend",
    },
    {
      name: "My Movies",
      img: "https://www.boundless.co.uk/-/media/PartnerAssetsSet/The%20Cinema%20Society/240723/People%20enjoying%20a%20film%20at%20the%20cinema.jpg?mw=640&hash=A155971BB259F637E4B1C8B1DA25A601",
      linkGit: "https://github.com/fekry-zakaria/movie-app",
      linkWeb: "https://movie-app-two-swart-89.vercel.app/",
    },
    {
      name: "Rock Power",
      img: "../../../public/logo.png",
      linkGit: "https://github.com/fekry-zakaria/Rock-Power-Web",
      linkWeb: "https://rock-power-web.vercel.app/",
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
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
  className="relative group w-full max-w-sm"
>
  {/* Glow Layer */}
  <div
    className={`absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100
               transition duration-700 blur-xl
               bg-gradient-to-r ${themeName === "dark" ?"  from-[#ffff] via-transparent to-[#ffff]" :" from-black via-transparent to-black"} `}
  />

  {/* Card */}
  <div
    className="relative rounded-3xl overflow-hidden
               bg-[#2b2928]"
  >
    {/* Image */}
    <div className="relative h-60 overflow-hidden">
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-full object-cover
                   transition-transform duration-[1200ms]
                   group-hover:scale-110 group-hover:-rotate-1"
      />

      {/* Light Sweep */}
      <div
        className="absolute inset-0 pointer-events-none
                   opacity-0 group-hover:opacity-100
                   transition duration-700
                   bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]
                   translate-x-[-100%] group-hover:translate-x-[100%]"
      />
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      <h3
        className="text-xl font-semibold text-white tracking-wide
                   transition-all duration-500
                   group-hover:translate-x-1"
      >
        {project.name}
      </h3>

      <div className="flex gap-4">
        <a
          href={project.linkGit}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     text-sm font-medium text-white
                     border border-white/15
                     hover:bg-[#bbfe32] hover:text-black
                     transition"
        >
          <FaGithub /> Code
        </a>

        <a
          href={project.linkWeb}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     text-sm font-medium text-white
                     border border-white/15
                     hover:bg-[#bbfe32] hover:text-black
                     transition"
        >
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </div>
  </div>
</motion.div>

          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
