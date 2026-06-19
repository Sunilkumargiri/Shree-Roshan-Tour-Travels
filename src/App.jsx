import React, { useEffect } from "react"; // 1. Added useEffect here
import Navbar from "./components/Navbar";
import TravelHero from "./components/TravelHero";
import Itineraries from "./components/Itineraries";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  // 2. This hook runs once when the app loads and changes the tab title
  useEffect(() => {
    document.title = "ShreeRoshanTravels";
  }, []);

  return (
    <div className="min-h-screen bg-stone-950">
      <Navbar />
      <TravelHero />
      <Itineraries />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;