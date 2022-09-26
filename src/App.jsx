import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <div className="container-fluid">
      <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white">
        <NavBar />
        <Hero/>
      </div>
    </div>
  );
}

export default App;
