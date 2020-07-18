import React from "react";

import "./App.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
