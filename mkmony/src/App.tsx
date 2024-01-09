import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from 'react';

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { PortfolioItem } from "./pages/PortfolioItem";
import { Contact } from "./pages/Contact";

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { ScrollToTop } from "./components/ScrollToTop"
import { MobileMenu } from "./components/MobileMenu"

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
          <Route path="/portfolio/item" Component={PortfolioItem} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ScrollToTop />
      <MobileMenu />
    </div>
  );
}

export default App;
