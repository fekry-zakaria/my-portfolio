import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componant/navbar"; // تأكد من المسار الصحيح
import Home from "./componant/Homa/Home";
import About from "./componant/About/About";
import Projects from "./componant/Projects/projects";
import Contact from "./componant/contact/contact";
import VantaBackground from "./componant/VantaBackground";
import Footer from "./componant/Footer";


function App() {
  return (
    
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <VantaBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </div>
     
    </Router>
  
  );
}

export default App;
