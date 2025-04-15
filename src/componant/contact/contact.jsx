import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context/themContext";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Swal from 'sweetalert2';


function Contact() {
  const [loading,setloading]=useState(false)
  const [{ themeName }] = useContext(ThemeContext);
  const isLight = themeName === "light";

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();
    setloading(true)

    emailjs
      .sendForm(
        "service_naxyui9",     // ← Replace with your EmailJS service ID
        "template_j9cdotd",    // ← Replace with your EmailJS template ID
        form.current,
        "URpeUgCEDJHoJTHEq"      // ← Replace with your EmailJS public key
      )
      .then(

        (result) => {

          console.log(result.text);
          Swal.fire({
            title: "Message sent successfully!",
            icon: "success",
        });
     
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Failed to send message.",
            icon: "error",
        });
         
        }
      ).finally(()=>{
        setloading(false)

        e.target.reset(); 
      }

      )
  };

  return (
    <>
      <div className="pt-30 flex justify-center items-start gap-10 flex-wrap lg:flex-nowrap  ">
    
        
        <div
          style={{ animation: "slideInFromLeft 1s ease-out" }}
          className={`max-w-md w-95 md:w-full  rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 
            ${isLight
              ? "bg-gradient-to-r from-pink-100 to-blue-200"
              : "bg-gradient-to-r from-[#3b2d2f] to-[#5a3b3b]"}`}
        >
          <h2
            style={{ animation: "appear 2s ease-out" }}
            className={`text-center text-4xl font-extrabold ${
              isLight ? "text-gray-800" : "text-white"
            }`}
          >
            Welcome
          </h2>
          <p
            style={{ animation: "appear 3s ease-out" }}
            className={`text-center font-bold ${isLight ? "text-gray-600" : "text-gray-200"}`}
          >
          Say hello anytime
          </p>

          {/* === FORM START === */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="relative">
              <input
                placeholder="Name"
                className={`peer h-10 w-full border-b-2 ${
                  isLight ? "border-gray-500 text-gray-800" : "border-gray-300 text-white"
                } bg-transparent placeholder-transparent focus:outline-none ${
                  isLight ? "focus:border-blue-600" : "focus:border-[#cc5c24]"
                }`}
                required
                id="name"
                name="name"
                type="text"
              />
              <label
                className={`absolute left-0 -top-3.5 text-sm transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-2
                peer-focus:-top-3.5 peer-focus:text-sm
                ${
                  isLight
                    ? "text-gray-600 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600"
                    : "text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-[#cc5c24]"
                }`}
                htmlFor="name"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                placeholder="Email"
                className={`peer h-10 w-full border-b-2 ${
                  isLight ? "border-gray-500 text-gray-800" : "border-gray-300 text-white"
                } bg-transparent placeholder-transparent focus:outline-none ${
                  isLight ? "focus:border-blue-600" : "focus:border-[#cc5c24]"
                }`}
                required
                id="email"
                name="email"
                type="email"
              />
              <label
                className={`absolute left-0 -top-3.5 text-sm transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-2
                peer-focus:-top-3.5 peer-focus:text-sm
                ${
                  isLight
                    ? "text-gray-600 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600"
                    : "text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-[#cc5c24]"
                }`}
                htmlFor="email"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                placeholder="Message"
                rows="4"
                className={`peer w-full border-b-2 resize-none ${
                  isLight ? "border-gray-500 text-gray-800" : "border-gray-300 text-white"
                } bg-transparent placeholder-transparent focus:outline-none ${
                  isLight ? "focus:border-blue-600" : "focus:border-[#cc5c24]"
                }`}
                required
                id="message"
                name="message"
              ></textarea>
              <label
                className={`absolute left-0 -top-3.5 text-sm transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-2
                peer-focus:-top-3.5 peer-focus:text-sm
                ${
                  isLight
                    ? "text-gray-600 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600"
                    : "text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-[#cc5c24]"
                }`}
                htmlFor="message"
              >
                Message
              </label>
            </div>

            <button
            disabled={loading}
              className={`w-full py-2 px-4 rounded-md shadow-lg font-semibold transition duration-200 
              ${isLight
                ? "bg-blue-500 hover:bg-blue-700 text-white"
                : "bg-[#cc5c24] hover:bg-[#b34f1f] text-white"}`}
              type="submit"
            >
             {loading ?  <div className="flex flex-row gap-2 justify-center  ">
      <div className={`w-4 h-4 rounded-full ${themeName ==="dark" ? "bg-white " : " bg-gray-800"}  animate-bounce `}/>
      <div className={`w-4 h-4 rounded-full  ${themeName ==="dark" ? "bg-white " : " bg-gray-800"} animate-bounce [animation-delay:-.3s] `}/>
      <div className={`w-4 h-4 rounded-full  ${themeName ==="dark" ? "bg-white " : " bg-gray-800"} animate-bounce [animation-delay:-.5s] `}/>
    </div>: "Send Message"}
            </button>
          </form>
          {/* === FORM END === */}
        </div>
        <div className=" max-w-md lg:pt-30 mt-8 lg:mt-0">
  <h1 className={`text-5xl font-bold mb-4 ${isLight ? 'text-gray-800' : 'text-white'}`}>
    Contact Details
  </h1>
  <ul className={`space-y-4 text-lg ${isLight ? 'text-gray-700' : 'text-gray-200'}`}>
    <li className="flex items-center gap-3">
    <div className="p-2 rounded-full bg-white shadow-md">
  <FaEnvelope className="text-xl" style={{ color: '#D93025' }} />
       </div>
      fekry.zakaria1461998@gmail.com
    </li>
    <li className="flex items-center gap-3">
    <div className="p-2 rounded-full bg-white shadow-md">
      <FaPhone className="text-xl text-green-500" />
      </div>
      +20 115 340 4836
    </li>
    <li className="flex items-center gap-3">
    <div className="p-2 rounded-full bg-white shadow-md">

      <FaMapMarkerAlt className="text-xl text-red-500" />

      </div>
      Cairo, Egypt
    </li>
  </ul>
</div>
           
       
      </div>
     
    </>
  );
}

export default Contact;
