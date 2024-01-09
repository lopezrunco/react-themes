// External
import { Routes, Route } from 'react-router-dom'

// General styles
import './App.scss'

// Pages
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Testimonios from './pages/Testimonios'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

// Components
import BackgroundShape from './components/BackgroundShape'
import Nav from './components/Nav'
import Footer from './components/Footer'
import BlogHome from './pages/BlogHome'
import Blog from './pages/Blog'
import PortfolioHome from './pages/PortfolioHome'
import PortfolioSingle from './pages/PortfolioSingle'
import NavigationScrollToTop from './components/NavigationScrollToTop'

function App() {
  return (
    <div className="App">

      <BackgroundShape />
      <Nav />
      <NavigationScrollToTop />

      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/novedades" element={<BlogHome />} />
        <Route path="/novedades/:id" element={<Blog />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/catalogo" element={<PortfolioHome />} />
        <Route path="/catalogo/:id" element={<PortfolioSingle />} />
        <Route path="/" element={<Nosotros />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
