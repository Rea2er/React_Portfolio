import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import "./App.scss";
import Project from "./components/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Project />
    </>
  );
};

export default App;
