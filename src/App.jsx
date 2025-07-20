import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// import Navbar, Footer, VantaBackground بشكل عادي لأنهم جزء أساسي من الصفحة
import Navbar from "./componant/navbar";
import VantaBackground from "./componant/VantaBackground";
import Footer from "./componant/Footer";

// ✅ مكونات هنعمل لها lazy load
const Home = lazy(() => import("./componant/Homa/Home"));
const About = lazy(() => import("./componant/About/About"));
const Projects = lazy(() => import("./componant/Projects/projects"));
const Contact = lazy(() => import("./componant/contact/contact"));

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <VantaBackground />
        <Navbar />

        {/* ✅ لفّ Routes بـ Suspense */}
        <Suspense fallback={  <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
    </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
