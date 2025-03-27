import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import Card from './components/card.jsx'

function App() {
  
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">Tailwind test</h1>
      <Card channel="Durga moka" /> 
      <Card channel="srinu" /> 
    </>
  );
}

export default App;
