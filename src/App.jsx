
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Background from "./pages/Background";
import Welcome from "./pages/Welcome";
import VisionMission from "./pages/VisionMission";
import Leadership from "./pages/Leadership";
import Achievements from "./pages/Achievements";

import Programmes from "./pages/Programmes";
import AdmissionRequirements from "./pages/AdmissionRequirements";
import HowToApply from "./pages/HowToApply";
import FeeStructure from "./pages/FeeStructure";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery"; 
import Contact from "./pages/Contact";  

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Main pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* Individual About pages */}
                <Route path="/about/background" element={<Background />} />
                <Route path="/about/welcome" element={<Welcome />} />
                <Route path="/about/vision-mission" element={<VisionMission />} />
                <Route path="/about/leadership" element={<Leadership />} />
                <Route path="/about/achievements" element={<Achievements />} />

                {/* Individual Admissions pages */}
                <Route path="/admissions/programmes" element={<Programmes />} />
                <Route path="/admissions/requirements" element={<AdmissionRequirements />} />
                <Route path="/admissions/how-to-apply" element={<HowToApply />} />
                <Route path="/admissions/fees" element={<FeeStructure />} />
                {/* Academics page */}
                <Route path="/academics" element={<Academics />} /> 
                {/* Gallery page */}
                <Route path="/gallery" element={<Gallery />} />

                {/* Contact page */}
                <Route path="/contact" element={<Contact />} />
                


            </Routes>
        </BrowserRouter>
    );
}

export default App;
