import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    // Add any initialization logic here
    console.log("Portfolio app initialized");
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Intro />
        <About />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
