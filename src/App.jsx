import React from "react";
import ButtonGradient from "./assets/svgs/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/About";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden border-x border-gray-500 m-6">
        <Header />
        <div className="border-b border-gray-500 z-1">
          <Hero />
        </div>
        <div className="border-b border-gray-500 z-1">
          <About />
        </div>
        <div className="border-b border-gray-500 z-1">
          <Partners />
        </div>
        <div className="border-b border-gray-500 z-1">
          <CallToAction />
        </div>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
