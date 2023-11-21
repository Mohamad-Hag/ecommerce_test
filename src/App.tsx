import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./style.css";
import Header from "./components/Header";
//import Content from "./components/Content";
import Content from "./components/Footer";
import WelcomeSection from "./components/WelcomeSection";
import axios from "axios";
import { useEffect } from "react";


function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeSection />
      <Content />
    </div>
  );
}

export default App;
