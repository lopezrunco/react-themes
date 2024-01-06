import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from 'react';

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import './App.css';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
