import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/team" Component={Team} />
          <Route path="/services" Component={Services} />
          <Route path="/projects" Component={Projects} />
          <Route path="/blog" Component={Blog} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
