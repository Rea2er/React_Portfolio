import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import "./App.scss";
import Project from "./components/Project";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Education />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default App;
