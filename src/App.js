import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import "./App.scss";
import Project from "./components/Project";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Education />
      <Skills />
      <Project />
    </div>
  );
};

export default App;
