import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { BlogItem } from "./pages/BlogItem";
import { PortfolioItem } from "./pages/PortfolioItem";
import { ServiceItem } from "./pages/ServiceItem";

import { Bottom } from "./components/Bottom";
import { Footer } from "./components/Footer";
import { GoToTop } from "./components/GoToTop";
import { MobileMenu } from "./components/MobileMenu";

export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/services/item" Component={ServiceItem} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/portfolio/item" Component={PortfolioItem} />
          <Route path="/blog" Component={Blog} />
          <Route path="/blog/item" Component={BlogItem} />
          <Route path="/contact" Component={Contact} />
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
      <Bottom />
      <Footer />
      <GoToTop />
      <MobileMenu />
    </div>
  );
}
