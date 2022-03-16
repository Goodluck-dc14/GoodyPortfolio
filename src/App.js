import React from "react";
import Home from "./Portfolio/Home";
import About from "./Portfolio/About";
import Structure from "./Portfolio/Structure/Structure";
import Service from "./Portfolio/Service";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Portfolio/Resume";
import Contact from "./Portfolio/Contact";

const App = () => {
  return (
    <div>
      <Structure />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
