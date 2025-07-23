import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Portfolio from "./Portfolio";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";

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
