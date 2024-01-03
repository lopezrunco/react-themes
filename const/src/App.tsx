import { Route, BrowserRouter, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ProjectItemPage } from "./pages/ProjectItemPage";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/team" Component={TeamPage} />
          <Route path="/services" Component={ServicesPage} />
          <Route path="/projects/item" Component={ProjectItemPage} />
          <Route path="/projects" Component={ProjectsPage} />
          <Route path="/blog/post" Component={BlogPostPage} />
          <Route path="/blog" Component={BlogPage} />
          <Route path="/contact" Component={ContactPage} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
