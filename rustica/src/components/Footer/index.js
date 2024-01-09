import './style.scss'

import SocialLinks from '../SocialLinks'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <div className="container mb-4">
                <div className="row">
                    <div className="footer-wrapper">
                        <div className="site-info">
                            <p>© Rústica {year} | Todos los derechos reservados | Desarrollo: <a href="https://www.lopezrunco.com/" target="_blank" rel="noreferrer">lopezrunco</a></p>
                        </div>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer