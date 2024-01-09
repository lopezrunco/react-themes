// import { Link } from 'react-router-dom'
import NavigationLink from '../NavigationLink'

import './style.scss'

function Nav() {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col header-container">
                        <nav>
                            <ul>
                                <li>
                                    <NavigationLink to="/"><i className="fas fa-home"></i><span>Nosotros</span></NavigationLink>
                                </li>
                                <li>
                                    <NavigationLink to="/catalogo"><i className="fas fa-briefcase"></i><span>Catálogo</span></NavigationLink>
                                </li>
                                <li>
                                    <NavigationLink to="/servicios"><i className="fas fa-cog"></i><span>Servicios</span></NavigationLink>
                                </li>
                                <li>
                                    <NavigationLink to="/testimonios"><i className="far fa-comments"></i><span>Testimonios</span></NavigationLink>
                                </li>
                                <li>
                                    <NavigationLink to="/novedades"><i className="fas fa-newspaper"></i><span>Novedades</span></NavigationLink>
                                </li>
                                <li>
                                    <NavigationLink to="/contacto"><i className="fas fa-envelope"></i><span>Contacto</span></NavigationLink>
                                </li>
                            </ul>
                        </nav>
                        <a className="primary-button" href="/"><i className="fas fa-download"></i>Catálogo</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav